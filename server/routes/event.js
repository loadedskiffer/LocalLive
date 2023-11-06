const express = require('express')
const router = express.Router()

const Event = require('../models/event_model.js')
var db = require('../database');

// @route GET /artist
// @desc Get all artists
router.get('/all', (req, res) => {
    db.get().collection('Events').find({}).toArray()
      .then((events) => {
      res.json(events)
    });
  })

router.post('/create', async (req, res) => {
    //first do some checking to make sure we have everything we need
    console.log(req.body)
    let fields = ['event_name', 'duration', 'date', 'venueID', 'artistID', 'parking_and_admission_info'];
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
        venueID: req.body.venueID,
        artistID: req.body.artistID,
        parking_and_admission_info: req.body.parking_and_admission_info
    })

    //put it in database
    console.log(newEvent)     
    const result = await db.get().collection('Events').insertOne(newEvent); 
    res.status(200).json(result);
  })

module.exports = router