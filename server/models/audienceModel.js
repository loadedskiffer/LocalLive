import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Venue from './venueModel.js';
import Artist from './artistModel.js';
import Event from './eventModel.js';
import { Schema } from 'mongoose';

const audienceSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    genres: {
      type: String,
      default: ""
    },
    followedVenues: {
      type: [Schema.Types.ObjectId],
      ref: "Venue",
      default: []
    },
    followedArtists: {
      type: [Schema.Types.ObjectId],
      ref: "Artist",
      default: []
    },
    savedEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event",
      default: []
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
audienceSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
audienceSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Audience = mongoose.model('Audience', audienceSchema);

export default Audience;