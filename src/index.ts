import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./database/database.js";
import dotenv from "dotenv";
import {
  getCustomers,
  getIndividualCustomer,
} from "./controllers/customer.controller.js";
import { getTransactions } from "./controllers/transaction.controller.js";
import { schema } from "./graphql/schema/schema.js";
import { getAccountDetail } from "./controllers/account.controller.js";

dotenv.config();

const dbUrl = String(process.env.DB_URL);
const port_no = Number(process.env.PORT);

connectDb(dbUrl);



const resolvers = {
  Query: {
    customers: getCustomers,
    customer: getIndividualCustomer,
    transactions: getTransactions,
  },
  Transactions:{
    account_id:async (transactions:any ) => {
     return await getAccountDetail(transactions.account_id)
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: port_no },
});

console.log(`🚀  Server ready at: ${url}`);
