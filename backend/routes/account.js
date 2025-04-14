const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const zod = require("zod");
const { UserModel, Account } = require("../db");
const authMiddleware = require("../middleware");
const Transaction = require("../transactionModel");
const { v4: uuidv4 } = require('uuid');

// Zod schema for input validation
const transferSchema = zod.object({
  amount: zod.coerce.number().positive(),
  sendTo: zod.string(),
  note: zod.string().max(25).optional(),
});

// Route: Get balance
router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const userAccount = await Account.findOne({ userId: req.userId });
    if (!userAccount) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({ balance: userAccount.balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/history", authMiddleware, async (req, res) => {
  try {
    const userAccount = await Account.findOne({ userId: req.userId }).populate({
      path: 'transactions',
      populate: [
        { path: 'payer', select: '-password' },
        { path: 'receiver', select: '-password' }
      ]
    });
    if (!userAccount) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json({ history: userAccount.transactions });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route: Transfer money
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();

  try {
    const parsed = transferSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }

    const { amount, sendTo, note } = parsed.data;

    session.startTransaction();

    // Fetch sender account
    const senderAccount = await Account.findOne({ userId: req.userId }).session(session);
    if (!senderAccount || senderAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Fetch receiver account
    const receiverAccount = await Account.findOne({ userId: sendTo }).session(session);
    if (!receiverAccount) {
      await session.abortTransaction();
      return res.status(400).json({ message: "Invalid receiver account" });
    }

    // Update sender balance
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    // Update receiver balance
    await Account.updateOne(
      { userId: sendTo },
      { $inc: { balance: amount } }
    ).session(session);

    // Create transaction logs (both debit and credit)
    const transactionId = uuidv4();

    const [debitTransaction, creditTransaction] = await Transaction.create([
      {
        transactionId,
        amount,
        payer: req.userId,
        receiver: sendTo,
        type: "debit",
        date: new Date(),
        note: note || "Transfer to user",
      },
      {
        transactionId,
        amount,
        payer: req.userId,
        receiver: sendTo,
        type: "credit",
        date: new Date(),
        note: note || "Transfer received from user",
      }
    ], { session });

    // Update transaction references in accounts
    await Account.updateOne(
      { userId: req.userId },
      { $push: { transactions: debitTransaction._id } }
    ).session(session);

    await Account.updateOne(
      { userId: sendTo },
      { $push: { transactions: creditTransaction._id } }
    ).session(session);

    // Commit transaction
    await session.commitTransaction();

    res.status(200).json({ message: "Transfer Successful" });

  } catch (err) {
    await session.abortTransaction();
    console.error(err);
    res.status(500).json({ message: "An error occurred", error: err.message });
  } finally {
    session.endSession();
  }
});

module.exports = router;
