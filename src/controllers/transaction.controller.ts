import transactionModel from "../models/transactions.model.js";


export const getTransactions = async () => {

   let transactions = await transactionModel.find();

   return transactions;
}