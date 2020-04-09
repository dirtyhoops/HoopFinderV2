const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  avatar: {
    type: String,
    default: 'yyyyyeeeee.jpg',
  },
  backdrop: {
    type: String,
    default: 'baaaaaaaaackdrop.jpg',
  },
  avatar_bg: {
    type: String,
    default: 'aqua',
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  height: {
    feet: {
      type: Number,
    },
    inches: {
      type: Number,
    },
  },
  favoriteCourt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'court',
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
