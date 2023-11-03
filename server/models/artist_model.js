const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define Artist Schema 
const Artist_Schema = new Schema({
    artistID: {
      type: String,
      required: true,
      unique: true,
    },
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
      spotify: URL,
      apple_music: URL,
      soundcloud: URL,
      instagram: URL,
      youtube: URL,
      tiktok: URL,
      merchStore: URL,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
  }
})

// Create new artist model using schema
const artist = mongoose.model("Artist", Artist_Schema);
module.exports = artist;