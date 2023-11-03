const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Event schema
const Event_Schema = new Schema({
    event_name: {
        type: String,
        required: true,
    },
    duration: {type:String, required: true},
    date: {type:Date, required: true},
    venueID:{
        type:String,
        required: true
    },
    artistID:{
        type:String,
        required: true
    },
    parking_and_admission_info: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

// Create the Event Model from the schema
const event = mongoose.model('Events', Event_Schema);
module.exports = event;