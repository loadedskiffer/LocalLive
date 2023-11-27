const express = require('express')
const router = express.Router()

const Venue = require('../models/venue_model.js')
var db = require('../database');

//get names of all venue names for search functionality
router.get('/all', (req, res) => {
  db.get().collection('Venues').find({}).toArray()
    .then((events) => {
    names = []
    events.forEach(element => {
      names.push(element['venue_name'])
    });
    console.log(names)
    res.status(200).json(names);
  });
})

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
    const newVenue = new Venue({
        venue_name: req.body.venue_name,
        venue_website: req.body.venue_website,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        country: req.body.country,
        xcoor: req.body.xcoor,
        ycoor: req.body.ycoor,
        hours: req.body.hours,
        phoneNumber : req.body.phoneNumber
    })

    //put it in database
    console.log(newVenue)     
    const result = await db.get().collection('Venues').insertOne(newVenue); 
    res.status(200).json(result);
  })

// @route POST /venue/reviews/:name
// @desc add review for a venue
//:name in the path needs to be the name of the venue
//req.body must have a review field containing the review
router.post('/reviews/:name/', async (req, res) => {
  console.log(req.body)
  var venue = req.params['name']  
  var new_reviews = []
   //get artist from database and save array of current reviews
  await db.get().collection('Venues').find({venue_name:venue}).toArray()
    .then((venues) => {
      //check if they don't already have reviews
      if (venues[0].reviews) {
        new_reviews = venues[0].reviews;
      }
      //add new review to array
      new_reviews.push(req.body.review)
      
    });
  //update artist in db
  const result = db.get().collection('Venues').findOneAndUpdate({venue_name:venue},{$set: {reviews:new_reviews}})
  res.status(200).json(result);
})


//get all reviews for a venue
//:name must be the name of the venue
router.get('/reviews/:name', (req, res) => {
  var venue = req.params['name'] 
  db.get().collection('Venues').find({venue_name:venue}).toArray()
    .then((venues) => {
    res.json(venues[0].reviews)
  });
})

//search venue by name and get all info
//:name must be the name of the venue
router.get('/search/:name', (req, res) => {
  var venue = req.params['name'] 
  db.get().collection('Venues').find({venue_name:venue}).toArray()
    .then((venues) => {
    res.json(venues[0])
  });
})

module.exports = router