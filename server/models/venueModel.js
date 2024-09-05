import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Event from './eventModel.js';
import { Schema } from 'mongoose';

const venueSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    followers: Number,
    eventSaves: Number,
    links: [String],
    pastEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event"
    },
    upcomingEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event"
    },
    pendingEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event"
    },
    genres: [String],
    images: [String],
    videos: [String],
    aboutMe: String,
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
venueSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
venueSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Venue = mongoose.model('Venue', venueSchema);

export default Venue;