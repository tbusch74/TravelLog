const { Schema } = require('mongoose');

const voteSchema = new Schema(
  {
    voteCount: {
      type: Number,
      required: false,
      default: 0
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = voteSchema;
