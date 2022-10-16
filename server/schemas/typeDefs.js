const { gql } = require('apollo-server-express');

const typeDefs = gql`
    User {
        id: _id
        username: String
        email: String
        bookCount: Int
        savedBooks: [String]
    }
    Book {
        id: _id
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }
    Query {
        me: User;
    }
    Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email:String!, password:String!): Auth
        saveBook(input: bookInput): User 
        removeBook(bookId: String!): User
    }
    Auth {
        token: ID
        user: User
    }
`;

module.exports = typeDefs;