const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: String!
        friends: [User]
    }

    type Nationality {
        nationality: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        nationality(name: String!): [Nationality!]!
    }

    input createUserInput {
        name: String!
        username: String!
        age: Int = 18
        nationality: String = INDIA
    }

    input updateUserInput {
        id :ID!
        username: String!
      
    }

    type Mutation {
        createUser(input: createUserInput!): User!
        updateUser(input:updateUserInput!):User!
    }
`
module.exports = { typeDefs }
