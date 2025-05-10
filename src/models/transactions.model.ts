import { Schema, model } from "mongoose";

const transactionSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  transaction_code: {
    type: String,
    enum: ['buy', 'sell'], // Add more valid codes if needed
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  price: {
    type: Schema.Types.Decimal128, // Preserves high precision
    required: true
  },
  total: {
    type: Schema.Types.Decimal128,
    required: true
  }
});

const transactionsSchema = new Schema({
  account_id: {
    type: Number,
    required: true,
  },
  transaction_count: {
    type: Number,
    required: true,
  },
  bucket_start_date: {
    type: Date,
    required: true,
  },
  bucket_end_date: {
    type: Date,
    required: true,
  },
  transactions: {
    type: [transactionSchema],
    default: [],
  },
});

export default model("Transactions", transactionsSchema);

