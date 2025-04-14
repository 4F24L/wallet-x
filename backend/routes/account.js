const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");
const { UserModel, Account } = require("../db");
const { default: mongoose } = require("mongoose");
const authMiddleware = require("../middleware");
const Transaction = require("../transactionModel");

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const userAccount = await Account.findOne({ userId: req.userId });

    res.json({
      balance: userAccount.balance,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const toUserSchema = zod.object({
  amount: zod.coerce.number(),
  sendTo: zod.string(),
  note : zod.string().max(25)
});
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
  try {
    
    session.startTransaction();
    const { amount, sendTo, note } = req.body;
    const parsedResult = toUserSchema.safeParse(req.body);

    if (!parsedResult.success) {
      return res.status(420).json({
        message: "Invalid inputs",
      });
    }

    const userAccount = await Account.findOne({ userId: req.userId });

    if (!userAccount || userAccount.balance < amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    const toAccount = await Account.findOne({ userId: sendTo }).session(
      session
    );

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "invalid account",
      });
    }

    //self account update - ammount
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    ).session(session);

    //to User account update + ammount
    await Account.updateOne(
      { userId: sendTo },
      { $inc: { balance: amount } }
    ).session(session);

    // Log transactions
    const transaction = await Transaction.create(
        {
            transactionId: Math.floor(Math.random() * 1000000),
            amount,
            payer: req.userId,
            receiver: sendTo,
            type: "debit",
            date: new Date(),
            note
        },
        { session }
    );

    // Push transaction ID to both accounts
    await Account.updateOne(
        { userId: req.userId },
        { $push: { transactions: transaction[0]._id } }
    ).session(session);

    await Account.updateOne(
        { userId: sendTo },
        { $push: { transactions: transaction[0]._id } }
    ).session(session);

    await session.commitTransaction();

    res.status(200).json({
      message: "Transfer Successful",
    });
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;