import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Event from './eventModel.js';
import { Schema } from 'mongoose';

const artistSchema = mongoose.Schema(
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
    zipcode: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
      default: 100
    },
    links: [String],
    pastEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event"
    },
    upcomingEvents: {
      type: [Schema.Types.ObjectId],
      ref: "Event"
    },
    eventBids: {
      type: [Schema.Types.ObjectId],
      ref: "Event"
    },
    genres: [String],
    images: [String],
    videos: [String],
    availability: [Date],
    bookingFee: Number,
    aboutMe: String,
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
artistSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
artistSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Artist = mongoose.model('Artist', artistSchema);

export default Artist;