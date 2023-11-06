const express = require('express')
const router = express.Router()

//this won't be here yet on this branch but act like it in
//const Artist = require('../../models/Artist')
const Artist = require('../models/artist_model.js')
var db = require('../database');


//for now this just gets all artists, using to test if we are communicating with db properly
// @route GET /artist
// @desc Get all artists
router.get('/all_artists', (req, res) => {
  console.log("hit route")
  console.log(db)
  db.get().collection('Artists').find({}).toArray()
    .then((artists) => {
    res.json(artists)
  });
})

// @route POST /artist
// @desc Create new artist
router.post('/create', async (req, res) => {
  //first do some checking to make sure we have everything we need
  console.log(req.body)
  // let fields = ['event_name', 'duration', 'date', 'venueID', 'artistID', 'parking_and_admission_info'];
  // for (var field in fields) { 
  //     if(!(req.body).hasOwnProperty(fields[field])) {
  //         console.log(fields[field])
  //         res.status(400).json({error: "missing required fields" + field});
  //     }
  // }
  //create model
  const newArtist = new Artist({
    artist_name: req.body.artist_name,
    email: req.body.email,
    password: req.body.password,
    socials: {spotify: req.body.spotify, apple_music: req.body.apple_music}
  })

  //put it in database
  console.log(newArtist)     
  const result = await db.get().collection('Artists').insertOne(newArtist); 
  res.status(200).json(result);
})

module.exports = router
