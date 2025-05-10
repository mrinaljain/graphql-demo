import { Schema, model } from "mongoose";

type AccountType={}

const accountSchema= new Schema({
   account_id: {
      type: Number,
      required: true
   },
   limit: {
      type: Number,
      required: true
   },
   products: {
      type: [String],
      default: []
   }
});

export default model<AccountType>("Account", accountSchema);
export type {AccountType};