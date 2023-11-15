const express = require('express')
const router = express.Router()

const Artist = require('../models/artist_model.js')
var db = require('../database');

// @route GET /artist
// @desc Get the names of all artists for search functionality
router.get('/all', (req, res) => {
  db.get().collection('Artists').find({}).toArray()
    .then((events) => {
    names = []
    events.forEach(element => {
      names.push(element['artist_name'])
    });
    console.log(names)
    res.status(200).json(names);
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

// @route POST /artist/reviews/:name
// @desc add review for an artist
//:name in the path needs to be the name of the artist
//req.body must have a review field containing the review
router.post('/reviews/:name/', async (req, res) => {
  console.log(req.body)
  var artist = req.params['name']  
  var new_reviews = []
   //get artist from database and save array of current reviews
  await db.get().collection('Artists').find({artist_name:artist}).toArray()
    .then((artists) => {
      //check if they don't already have reviews
      if (artists[0].reviews) {
        new_reviews = artists[0].reviews;
      }
      //add new review to array
      new_reviews.push(req.body.review)
      
    });
  //update artist in db
  const result = db.get().collection('Artists').findOneAndUpdate({artist_name:artist},{$set: {reviews:new_reviews}})
  res.status(200).json(result);
})

module.exports = router

