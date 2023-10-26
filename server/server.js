const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000
const cors = require('cors');
const db = require('./database')
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


// creates a route where we can interact with our API
//this means if a user accesses http://localhost:5000/artist it will access the routes in routes/artist
app.use('/audience', audience)
app.use('/artist', artist)
app.use('/venue', venue)
app.use('/event', event)

db.connect(() => {
    app.listen(port, () => {console.log(`server started on ${port}`)})
});
