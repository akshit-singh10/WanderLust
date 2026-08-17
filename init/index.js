const mongoose = require('mongoose');
const Listing = require("../models/listing.js")
const intidata = require('./data.js');

// url 
const mongo_url = 'mongodb://127.0.0.1:27017/WanderLust';

mongoose.connect(mongo_url).then(()=> console.log("Mongo Connection Established")).catch((err)=> {throw err});


const initDB = async () =>
{
    await Listing.deleteMany({});
    await Listing.insertMany(intidata.data);
    console.log("inserted");
}

initDB();