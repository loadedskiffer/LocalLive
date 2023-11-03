const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Audience User schema
const Audience_User_Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the User Model from the schema
const User = mongoose.model('User', Audience_User_Schema);
module.exports = User;