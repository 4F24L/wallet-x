const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const {UserModel, Account} = require('../db');
const { default: mongoose } = require('mongoose');
const authMiddleware = require("../middleware")

router.get("/balance", authMiddleware, async (req, res) => {
    const userAccount = await Account.findOne({ userId: req.userId });

    res.json({
        balance: userAccount.balance
    });

})

const toUserSchema = zod.object({
    amount: zod.coerce.number(),
    sendTo: zod.string(),
})
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();

   session.startTransaction();
   const {amount, sendTo} = req.body;
   const parsedResult = toUserSchema.safeParse(req.body);

   if(!parsedResult.success){
    return res.status(420).json({
        message: "Invalid inputs"
    })
   }

   const userAccount = await Account.findOne({userId: req.userId})

   if(!userAccount || userAccount.balance < amount){
    await session.abortTransaction();
    return res.status(400).json({
        message: "Insufficient balance"
    });
   }

   const toAccount = await Account.findOne({userId: sendTo}).session(session);

   if(!toAccount){
    await session.abortTransaction();
    return res.status(400).json({
        message: "invalid account"
    })
    }

    //self account update - ammount
    await Account.updateOne({userId: req.userId}, {$inc: {balance: -amount}}).session(session)

    //to User account update + ammount
    await Account.updateOne({userId: sendTo}, {$inc: {balance: amount}}).session(session);

    await session.commitTransaction();

    res.status(200).json({
        message: "Transfer Successful"
    })

})

module.exports = router;