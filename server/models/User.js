const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // match email using regex
      match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Please enter a valid email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    travels: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Travel'
      }
    ],
    votes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Vote'
      }
    ]
  }
);


const User = model('User', userSchema);

module.exports = User;