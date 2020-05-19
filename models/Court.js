const mongoose = require('mongoose');

const CourtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
    default: 'N/A',
  },
  address: {
    street: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    zipcode: {
      type: Number,
      require: true,
    },
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      rating: {
        type: Number,
        required: true,
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
      city: {
        type: String,
      },
      state: {
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
  CheckedInPlayers: [
    {
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
      dateCheckedIn: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  surfaceType: {
    type: String,
    default: 'N/A',
  },
  numberOfHoops: {
    type: Number,
    default: 2,
  },
  rimHeight: {
    type: String,
    default: 'N/A',
  },
  isIndoor: {
    type: String,
    default: 'N/A',
  },
  isLighting: {
    type: String,
    default: 'N/A',
  },
  isPublic: {
    type: String,
    default: 'N/A',
  },
});

module.exports = Court = mongoose.model('court', CourtSchema);
