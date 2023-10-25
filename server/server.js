const express = require('express')
const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://loadedskiffer:Miles1010@cluster0.smelsmc.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);
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

// At some point we will pull the database connection out of each route and put it in a global variable
// but I haven't tested that yet so for now just connect in every route, its messy but it works for testing
// purposes


//EVENT ROUTES

//route for getting all events
app.get("/events", async (req, res) => {
    try{
        //connect to database
        await client.connect();
        const db = client.db("LocalLive");
        const collection = db.collection("Events");
        //console.log(collection)
        try {
            const cursor = await collection.find();
            const data = await cursor.toArray();
            console.log(data)
            //send array of our events as json back to the front end
            res.status(200).json(data);
        } catch(err){
            console.error(err);
            res.status(500).json({ error: "An error occurred while fetching data" }); 
        } 
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while connecting to the database" }); 
    }
    finally {
        await client.close();
    }    
    
})

//route for getting a specific event by its id
app.get("/events:id", async (req, res) => {


})


//route for creating event
app.post("/create_event", async (req, res) => {


})

//delete an event
app.delete("/delete_event", async (req, res) => {


})

//AUDIENCE MEMBER ROUTES

//route for creating an audience member user
app.post("/create_audience_user", async (req, res) => {


})

//route for signing audience member in
app.get("/sign_in_audience", async (req, res) => {


})

//VENUE ROUTES


//route for creating a Venue user
app.post("/create_venue", async (req, res) => {


})

//route for getting venue details
app.get("/get_venue", async (req, res) => {


})

//ARTIST ROUTES

//route for creating an artist member user
app.post("/create_artist", async (req, res) => {


})

//route for getting artist information
app.get("/get_artist", async (req, res) => {


})





app.listen(port, () => {console.log(`server started on ${port}`)})