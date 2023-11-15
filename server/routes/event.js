const express = require('express')
const router = express.Router()

const Event = require('../models/event_model.js')
var db = require('../database');

// @route GET /artist
// @desc Get all events
router.get('/all', (req, res) => {
    db.get().collection('Events').find({}).toArray()
      .then((events) => {
      res.json(events)
    });
  })

//get all events for an artist
//:name must be the name of the artist
router.get('/artist/:name', (req, res) => {
  var artist = req.params['name']  
  console.log()
  db.get().collection('Events').find({artistName:artist}).toArray()
    .then((events) => {
    res.json(events)
  });
})

//get all events at a venue
//:name must be the name of the venue
router.get('/venue/:name', (req, res) => {
  var venue = req.params['name'] 
  db.get().collection('Events').find({venueName:venue}).toArray()
    .then((events) => {
    res.json(events)
  });
})


router.post('/create', async (req, res) => {
    //first do some checking to make sure we have everything we need
    console.log(req.body)
    let fields = ['event_name', 'duration', 'date', 'venueName', 'artistName', 'parking_and_admission_info'];
    for (var field in fields) { 
        if(!(req.body).hasOwnProperty(fields[field])) {
            console.log(fields[field])
            res.status(400).json({error: "missing required fields" + field});
        }
    }
    //create model
    const newEvent = new Event({
        event_name: req.body.event_name,
        duration: req.body.duration,
        date: req.body.date,
        venueName: req.body.venueName,
        artistName: req.body.artistName,
        parking_and_admission_info: req.body.parking_and_admission_info
    })

    //put it in database
    console.log(newEvent)     
    const result = await db.get().collection('Events').insertOne(newEvent); 
    res.status(200).json(result);
  })

module.exports = router