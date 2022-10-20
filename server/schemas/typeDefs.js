const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Book {
        bookId: String
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    input bookInput {
        bookId: String
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email:String!, password:String!): Auth
        saveBook(input: bookInput): User 
        removeBook(bookId: String!): User
    }
`;

module.exports = typeDefs;