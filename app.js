const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const method_override = require('method-override');

const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

//
app.use(method_override('_method'));

// url 
const mongo_url = 'mongodb://127.0.0.1:27017/WanderLust';

//models
const Listing = require("./models/listing.js");

//parse
app.use(express.urlencoded({extended : true}));

//
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views/listing"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended : true}));

mongoose.connect(mongo_url).then(()=> console.log("Mongo Connection Established")).catch((err)=> {throw err});

app.get("/",(req,res)=>
{
    res.send("hi i am root");
});

// app.get("/testlisting",(req,res)=>
// {
//     let SampleListing = new Listing({
//         title : "My new Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Gujarat",
//         country : "India"
//     });

//     SampleListing.save().then(()=> {console.log("sample was saved")
//         res.send("Added");
//     }).catch((err) => { throw err});
// });


app.get("/listing",async (req,res)=>
{
   const allList = await Listing.find({});
   res.render("index.ejs",{allList});
});

// new route
app.get("/listing/new",(req,res)=>
{
    res.render("new.ejs");
});

//show specific list
app.get("/listing/:id",async (req,res)=>
{
    let id = req.params.id;

    const list = await Listing.findById(id);
    res.render("show.ejs",{list});
});



// create new route
app.post("/listing",async (req,res)=>
{   
    // let {title,description,price,location,country} = req.body;

    let listing = req.body.listing; // now listing is the direct document

    new Listing(listing).save().then(()=> console.log("New list added")).catch((err)=> console.log("couldn't add"));
    res.redirect("/listing");
});

//edit

app.get("/listing/:id/edit",async (req,res)=>
{
    let editList = await Listing.findById(req.params.id);
    res.render("edit.ejs",{list : editList});
});

//update
app.patch("/listing/:id",async (req,res)=>
{
    let id = req.params.id;
    let listing = req.body.listing;
    await Listing.findOneAndUpdate({_id : id},{...listing});
    console.log("Edited");
    res.redirect(`/listing/${id}`);
});

//delete
app.delete("/listing/:id",async (req,res)=>
{
    let deletedList = await Listing.findByIdAndDelete(req.params.id);
    console.log("DELETED\n",deletedList);
    res.redirect("/listing");
});

app.listen(8080,() =>
{
    console.log("listening on 8080");
});