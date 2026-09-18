if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const mongoose = require('mongoose');
const Listing = require("../models/listing.js")
const intidata = require('./data.js');

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = new mbxGeocoding({ accessToken: mapToken });

// url 
const mongo_url = 'mongodb://127.0.0.1:27017/WanderLust';

mongoose.connect(mongo_url).then(() => console.log("Mongo Connection Established")).catch((err) => { throw err });


const initDB = async () => {
    await Listing.deleteMany({});
    intidata.data = intidata.data.map((obj) => ({ ...obj, owner: "6aa68df236bcca397c4e94fc" }));

     for (let listing of intidata.data) {
        let response = await geocodingClient
            .forwardGeocode({
                query: `${listing.location}, ${listing.country}`,
                limit: 1
            })
            .send();

        listing.geometry = response.body.features[0].geometry; // see bug #3 below
    }


await Listing.insertMany(intidata.data);
console.log("inserted");
};

initDB();