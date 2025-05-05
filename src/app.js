import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { connectDb } from "./database/database.js";
import customerModel from "./models/customer.model.js";


connectDb("mongodb+srv://mrinal:spree12345@cluster0.5yymuvg.mongodb.net/");

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
    customer: Customer
  }
`;

const resolvers = {
  Query: {
    customers: async () => {
      let customers = await customerModel.find();
      return customers;
    },
    customer:async (parent, arg)=>{
      console.log(arg.id);
      
      let customer = await customerModel.findById(arg.id);
      return customer;
    }
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
