const express = require('express')
const router = express.Router()

//this won't be here yet on this branch but act like it in
const Book = require('../../models/Artist')

router.get('/test', (req, res) => res.json({msg: 'backend works'}))

// @route GET /artist
// @desc Get an artist by their id
router.get('/id', (req, res) => {
  Artist.find()
    .then(info => res.json(info))
    .catch(err => res.status(404).json({msg: 'no artist found'}))
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