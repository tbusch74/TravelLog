const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        travels: [Travel]
    }

    type Travel {
        _id: ID
        username: String
        travelText: String
        createdAt: String        
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users[username: String!]: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addTravel(travelText: String!): Travel
    }
`

module.exports = typeDefs;