const { UserList } = require('./fakedata')
const resolvers = {
    Query: {
        users() {
            return UserList
        },
        user: (parent,args) => {
            const id = args.id
            return UserList.find((item)=>item.id == Number(id))
        },
        nationality: (parent,args) => {
            return UserList.filter((item)=>item.nationality == args.nationality)
        }
    },
}

module.exports = {
    resolvers,
}
