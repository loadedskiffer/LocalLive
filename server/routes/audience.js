const express = require('express')
const router = express.Router()

const Audience = require('../models/audience_user_model.js')
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
    const newUser = new Audience({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    })
  
    //put it in database
    console.log(newUser)     
    const result = await db.get().collection('Audience').insertOne(newUser); 
    res.status(200).json(result);
  })
  
  module.exports = router
  