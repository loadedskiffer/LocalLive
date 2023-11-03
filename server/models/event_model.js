const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Event schema
const Event_Schema = new Schema({
    eventID: {
        type:String,
        required: true,
        unique: true,
    },
    event_name: {
        type: String,
        required: true,
    },
    duration: {type:String, required: true},
    date: {type:Date, required: true},
    venue_name: String,
    venue_website: URL,
    address: String,
    city: String,
    state: String,
    county: String,
    zipcode: Number,
    country: String,
    coordinates: { x: Decimal128, y: Decimal128 },
    parking_and_admission_info: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

// Create the User Model from the schema
const event = mongoose.model('User', Event_Schema);
module.exports = event;