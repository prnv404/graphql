const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./graphql/typedef')
const { resolvers } = require('./graphql/resolver')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log('graphql server is listening ' + url)
})
