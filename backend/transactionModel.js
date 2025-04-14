const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  type: { type: String, enum: ['credit', 'debit'], required: true, default: "credit" },
  payer: { type: String, required: true },
  receiver: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  note: { type: String }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports =  Transaction ;
