const express = require('express')
const router = express.Router()

//this won't be here yet on this branch but act like it in
//const Artist = require('../../models/Artist')
var db = require('../database');

router.get('/test', (req, res) => res.json({msg: 'backend works'}))

//for now this just gets all artists, using to test if we are communicating with db properly
// @route GET /artist
// @desc Get an artist by their id
router.get('/id', (req, res) => {
  console.log("hit route")
  console.log(db)
  db.get().collection('Artists').find({}).toArray()
    .then((artists) => {
    res.json(artists)
  });
})

// @route POST /artist
// @desc Create new artist
router.post('/', (req, res) => {
  const newArtist = new Artist({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

  newArtist.save().then(info => res.json(info))
})

// @route DELETE /artist
// @desc Delete book (public)
router.delete('/', (req, res) => {
  Artist.findOneAndRemove({_id: req.body.id}).then(() => {
    res.json({success: true})
  })
})

module.exports = router