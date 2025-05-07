import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./database/database.js";

import dotenv from "dotenv";
import {
  getCustomers,
  getIndividualCustomer,
} from "./controllers/customre.controller.js";
dotenv.config();

const dbUrl = process.env.DB_URL;

connectDb(dbUrl);

const typeDefs = `#graphql
type Customer {
  username: String!
  name: String!
  address: String
  birthdate: String
  email: String!
  accounts: [Int!]!
}
 type Query {
    customers: [Customer]
    customer(id: ID!): Customer
  }
`;

const resolvers = {
  Query: {
    customers: getCustomers,
    customer: (parent, args) => {
      console.log(args);

      getIndividualCustomer(args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
