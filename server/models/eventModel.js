import mongoose from 'mongoose';
import Venue from './venueModel.js';
import Artist from './artistModel.js';
import { Schema } from 'mongoose';

const eventSchema = mongoose.Schema(
  {
    name : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
      type: String,
      required: true
    },
    creator : {
        type: String,
        required: true
    },
    venue: {
        type: Schema.Types.ObjectId,
        ref: "Venue"
      },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "Artist"
      },
    needTickets: {
        type: Boolean,
        default: false
    },
    saves: {
        type: Number,
        default: 0
    },
    jointEvent: {
        type: Boolean,
        default: false
    },
    pending: {
        type: Boolean,
        default: false
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;