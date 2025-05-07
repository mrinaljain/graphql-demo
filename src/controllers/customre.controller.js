
import customerModel from "../models/customer.model.js";

export const getCustomers = async function () {
  let customers = await customerModel.find();
  return customers;
};


export const getIndividualCustomer  = async function (id){
   console.log(id);
   
   let customer = await customerModel.findById(id);
   return customer;
};
