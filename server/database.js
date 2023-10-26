const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://loadedskiffer:Miles1010@cluster0.smelsmc.mongodb.net/?retryWrites=true&w=majority';
let mongodb

async function connect(callback){
    console.log("trying to connect")
    const client = new MongoClient(uri);
    await client.connect();
    mongodb = client.db("LocalLive");
    console.log("connected to database")
    callback();
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};