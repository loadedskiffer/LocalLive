const express = require('express')
const router = express.Router()

const Venue = require('../models/venue_model.js')
var db = require('../database');

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

module.exports = router