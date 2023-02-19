const { UserList } = require('./fakedata')
const resolvers = {
    Query: {
        users() {
            return UserList
        },
        user: (parent, args) => {
            const id = args.id
            return UserList.find((item) => item.id == Number(id))
        },
        nationality: (parent, args) => {
            return UserList.filter((item) => item.nationality == args.nationality)
        },
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            const lastId = UserList[UserList.length - 1]
            user.id = lastId.id + 1
            UserList.push(user)
            return UserList[UserList.length - 1]
        },
        updateUser: (parent, args) => {
            const user = UserList.forEach((item) => {
                if (item.id === Number(args.input.id)) {
                    item.username = args.input.username
                    return item
                }
            })
            return user
        },
    },
}

module.exports = {
    resolvers,
}
