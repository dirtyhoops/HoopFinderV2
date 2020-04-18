const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  text: {
    type: String,
    required: true,
  },
  poster: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatar_bg: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  ownPost: {
    type: Boolean,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      avatar: {
        type: String,
      },
      avatar_bg: {
        type: String,
      },
      dateCreated: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model('post', PostSchema);
