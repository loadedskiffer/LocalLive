const { Decimal128 } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Venue schema
const Venue_Schema = new Schema({
    venue_name: {
        type: String,
        required: true,
    },
    venue_website: String,
    street_address: String,
    city: String,
    state: String,
    zipcode: Number,
    country: String,
    xcoor: Decimal128,
    ycoor: Decimal128,
    hours: String,
    phoneNumber: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    }, 
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

// Create the User Model from the schema
const venue = mongoose.model('Venues', Venue_Schema);
module.exports = venue;