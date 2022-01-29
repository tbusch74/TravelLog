const { Schema, model } = require('mongoose');
const voteSchema = require('./Vote');

const travelSchema = new Schema(
  {
    travelText: {
      type: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    votes: [voteSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

travelSchema.virtual('voteCount').get(function() {
  return this.votes.length;
});

const Travel = model('Travel', travelSchema);

module.exports = Travel;