// import models
const { User, Book } = require('../models');
// import sign token functions from auth file
const { signToken } = require('../utils/auth');
// import error messages if user isn't logged in 
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id });
                return userData;
            }
            throw new AuthenticationError('Please log in to view your saved books!');
    }
    },
    
    Mutation: {
        login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw new AuthenticationError('Incorrect credentials.');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials.');
        }

        const token = signToken(user);

        return { token, user };
        },

        addUser: async (parent, args) => {
            const user = await User.create(args);

            const token = signToken(user);

            return{ token, user };
        },
        saveBook: async (parent, { input }, context) => {
        if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { savedBooks: input } },
            { new: true }
            );
            return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!')
        },
        removeBook: async (parent, args, context) => {
          if (context.user) {
              const updatedUser = await User.findOneAndUpdate(
                  { _id: context.user._id },
                  { $pull: { savedBooks: {bookId: args.bookId } } },
                  { new: true }
            );
            return updatedUser;
          }
            throw new AuthenticationError('You must be logged in to delete a saved book!');
        }
    }
};

module.exports = resolvers;