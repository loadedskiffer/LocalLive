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

app.get("/", async (req, res) => {
    try{
        await client.connect();
        const db = client.db("LocalLive");
        const collection = db.collection("Users");
        console.log(collection)
        res.status(200).json({ error: "Connected to database!" }); 
    }catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while connecting to the database" }); 
    }
    finally {
        await client.close();
    }    
    
})

app.listen(port, () => {console.log(`server started on ${port}`)})