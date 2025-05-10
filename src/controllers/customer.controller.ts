
import customerModel from "../models/customer.model.js";

export const getCustomers = async function () {
  let customers = await customerModel.find();
  return customers;
};


export const getIndividualCustomer = async (parent: any, args: { id: string }) => {
  let customer = await customerModel.findById(args.id);
  return customer;
};
