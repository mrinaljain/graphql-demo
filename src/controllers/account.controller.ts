import accountModel from "../models/account.model.js";


export const getAccountDetail = async (id:String)=>{

let account = await accountModel.findOne({account_id:id});

return account;
}