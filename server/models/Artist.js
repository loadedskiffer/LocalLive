const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = Artist = mongoose.model('artist', ArtistSchema)