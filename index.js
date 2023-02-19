const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema/typedef')
const { resolvers} = require('./schema/resolver')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log('graphql server is listening ' + url)
})
