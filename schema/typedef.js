const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id:ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        friends:[User]
    }

    type Nationality{
        nationality:String!
        name:String!
    }

    type Query {
        users: [User!]!
        user(id:ID!):User!
        nationality(name:String!):[Nationality!]!
    }
`
module.exports = { typeDefs }
