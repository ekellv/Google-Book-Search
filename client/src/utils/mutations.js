import { gql } from '@apollo/client';

// user login mutation
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    link
                    image
         }
       }
     }
   }
`;

// add user mutation
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    image
                    link
                }
            }
        }
    }
`;

// save books mutation
export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;

// remove books mutation
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;