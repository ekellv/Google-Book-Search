# Google Book Search

## Description

This application uses the MERN stack to replace a RESTful API and instead use GraphQL.

![Github license](http://img.shields.io/badge/License-MIT-yellow.svg)

[A version of the deployed website can be viewed here.]()

## Contents

1. [About](#about)
   1. [User Story](#user%20story)
   2. [Acceptance Criteria](#acceptance%20criteria)
   3. [Visuals](#visuals)
   4. [Technologies](#technologies)
2. [License](#license)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Testing](#testing)
7. [Authors and Acknowledgements](#authors%20and%20acknowledgements)

## About

This project was initially built using a RESTful API and then refactored to use GraphQL queries and mutations to fetch and modify data. The authentication middleware was also refactored to work with the GraphQL API, and then an Apollo Provider was created to work with the Apollo Server so users can have the same functionality with a quicker build and response time.

## User Story

```
AS AN avid reader

I WANT to search for new books to read

SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```
GIVEN a book search engine

WHEN I load the search engine

THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

WHEN I click on the Search for Books menu option

THEN I am presented with an input field to search for books and a submit button

WHEN I am not logged in and enter a search term in the input field and click the submit button

THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site

WHEN I click on the Login/Signup menu option

THEN a modal appears on the screen with a toggle between the option to log in or sign up

WHEN the toggle is set to Signup

THEN I am presented with three inputs for a username, an email address, and a password, and a signup button

WHEN the toggle is set to Login

THEN I am presented with two inputs for an email address and a password and login button

WHEN I enter a valid email address and create a password and click on the signup button

THEN my user account is created and I am logged in to the site

WHEN I enter my account’s email address and password and click on the login button

THEN I the modal closes and I am logged in to the site

WHEN I am logged in to the site

THEN the menu options change to Search for Books, an option to see my saved books, and Logout

WHEN I am logged in and enter a search term in the input field and click the submit button

THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

WHEN I click on the Save button on a book

THEN that book’s information is saved to my account

WHEN I click on the option to see my saved books

THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account

WHEN I click on the Remove button on a book

THEN that book is deleted from my saved books list

WHEN I click on the Logout button

THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
```

## Visuals:

![]()

## Technologies

- [Express.js](https://expressjs.com/)

- [Node.js](https://nodejs.org/en/)

- [MongoDB](https://www.mongodb.com/)

- [React](https://reactjs.org/)

- [GraphQL](https://graphql.org/)

- [Apollo](https://www.apollographql.com/docs/apollo-server/)

- [JWT](https://jwt.io/)

## License

This reposititory is licensed under the MIT license.

For more information about this license or any others, please visit: [https://choosealicense.com/](https://choosealicense.com/).

## Installation

Please run the following dependencies to install the application:

`npm i`

## Usage

After installing the application, run `npm run develop` to launch the application.

## Contributing

This repository is currently not accepting contributions.

## Testing

There are currently no tests configured for this application.

## Authors and Acknowledgements

Built by: Erin Voelker

## Contact Information

- GitHub: [ekellv](https://github.com/ekellv)
- Email: [erinkvoelker@gmail.com](mailto:erinkvoelker@gmail.com)
