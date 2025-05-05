
import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
   username: { type: String, required: true, unique: true },
   name: { type: String, required: true },
   address: { type: String },
   birthdate: { type: Date },
   email: { type: String, required: true },
   accounts: [{ type: Number }],
 
});

export default mongoose.model("Customer", CustomerSchema);
