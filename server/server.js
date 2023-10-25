const express = require('express')
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://loadedskiffer:Miles1010@cluster0.smelsmc.mongodb.net/?retryWrites=true&w=majority';
const bodyParser = require('body-parser');
const app = express()
const port = 5000
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5000'
}))

app.use(express.json()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// imports the API from the routes/api folder
const artist = require('./routes/artist')
const audience = require('./routes/audience')
const venue = require('./routes/venue')
const event = require('./routes/event')

var db = null // global variable to hold the connection

MongoClient.connect(uri, function(err, client) {
    if(err) { console.error(err) }
    db = client.db('LocalLive') // once connected, assign the connection to the global variable
})



// creates a route where we can interact with our API
//this means if a user accesses http://localhost:5000/artist it will access the routes in routes/artist
app.use('/audience', audience)
app.use('/artist', artist)
app.use('/venue', venue)
app.use('/event', event)


app.listen(port, () => {console.log(`server started on ${port}`)})