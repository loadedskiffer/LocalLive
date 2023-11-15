const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define Artist Schema 
const Artist_Schema = new Schema({
    artist_name: {
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
    socials: {
      spotify: String,
      apple_music: String,
      soundcloud: String,
      instagram: String,
      youtube: String,
      tiktok: String,
      merchStore: String,
    },
    reviews: [String],
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
   }
   
})

// Create new artist model using schema
const artist = mongoose.model("Artist", Artist_Schema);
module.exports = artist;