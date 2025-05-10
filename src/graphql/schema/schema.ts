export const schema = `#graphql
scalar Date

type Customer {
  username: String!
  name: String!
  address: String
  birthdate: String
  email: String!
  accounts: [Int!]!
}
type Account{
  account_id: Int!
  limit:Int!
  products:[Int!]!
}
type Transactions{
  account_id: Account!
  transaction_count:Int!
  bucket_start_date:Date!
  bucket_end_date:Date!
}
 type Query {
    customers: [Customer]
    customer(id: ID!): Customer
    transactions:[Transactions]
    
  }
`;

