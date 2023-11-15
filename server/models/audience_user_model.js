const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Audience User schema
const Audience_User_Schema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    }, 
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// Create the User Model from the schema
const Audience = mongoose.model('Audience', Audience_User_Schema);
module.exports = Audience;