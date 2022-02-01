const { AuthenticationError } = require('apollo-server-express');
const { User, Travel } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('travels')
        
                return userData;
            }
        
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('travels');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('travels');
        },
        travels: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Travel.find(params).sort({ createdAt: -1 });
        },
        travel: async (parent, { _id }) => {
            return Travel.findOne({ _id });
        }
        },
  
    Mutation: {
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('No such user');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addTravel: async(parent,args, context) => {
            if (context.user) {
            const travel = await Travel.create({...args, username: context.user.username });
            await User.findByIdAndUpdate (
                { _id: context.user._id },
                {$push: {travels: travel._id}},
                {new: true}
            )
            return travel;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteTravel: async (partent, {travelId}, context) => {
            if (context.user) {
                deletedTravel = await Travel.findById(travelId)
                if (deletedTravel && deletedTravel.username === context.user.username){
                    await User.findByIdAndUpdate(
                        { _id: context.user._id },
                        { $pull: { travels: {_id:travelId}} },
                        { new: true }
                    )
                    await Travel.deleteOne ({_id: travelId}) 
                    return deletedTravel
                }else{
                    throw new AuthenticationError('No travel with this ID on record')
                }
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;