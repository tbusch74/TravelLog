const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
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
        user (username: String!): User
        users: [User]
        travels(username: String):[Travel]
        travel(_id: ID!):Travel
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addTravel(travelText: String!): Travel
        deleteTravel(travelId: String!):Travel
    }
`;

module.exports = typeDefs;