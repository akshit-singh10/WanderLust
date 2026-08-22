const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const method_override = require('method-override');
const wrapasync = require("./utils/wrapasync.js");
const ExpressError = require("./utils/expresserror.js");
const listingSchema = require('./schema.js');

//validate listing
const validateListing = (req,res,next) =>
{
    let {error} = listingSchema.validate(req.body);
    if(error)
    {
        let errmsg = error.details.map((el) => el.message ).join(",");
        throw new ExpressError(400,errmsg);
    }
    next();
};


const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

//
app.use(method_override('_method'));

// url 
const mongo_url = 'mongodb://127.0.0.1:27017/WanderLust';

//models
const Listing = require("./models/listing.js");

//parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log("Views directory:", app.get("views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongo_url).then(() => console.log("Mongo Connection Established")).catch((err) => { throw err });

app.get("/", (req, res) => {
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


app.get("/listing", async (req, res) => {
    const allList = await Listing.find({});
    res.render("listing/index.ejs", { allList });
});

// new route
app.get("/listing/new", (req, res) => {
    res.render("listing/new.ejs");
});

//show specific list
app.get("/listing/:id", async (req, res) => {
    let id = req.params.id;

    const list = await Listing.findById(id);
    res.render("listing/show.ejs", { list });
});



// create new route
app.post("/listing",validateListing, wrapasync(async (req, res, next) => {
    // let {title,description,price,location,country} = req.body;

    let listing = new Listing(req.body.listing); // now listing is the direct document

    

    await listing.save();
    res.redirect("/listing");

}));

//edit or update

app.get("/listing/:id/edit",validateListing, async (req, res) => {
    let editList = await Listing.findById(req.params.id);
    res.render("listing/edit.ejs", { list: editList });
});

//update
app.patch("/listing/:id", async (req, res) => {
    let id = req.params.id;
    let listing = req.body.listing;
    await Listing.findOneAndUpdate({ _id: id }, { ...listing });
    console.log("Edited");
    res.redirect(`/listing/${id}`);
});

//delete
app.delete("/listing/:id", async (req, res) => {
    let deletedList = await Listing.findByIdAndDelete(req.params.id);
    console.log("DELETED\n", deletedList);
    res.redirect("/listing");
});


// for every non existing route
app.all("/*abc", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {

    let { statusCode = 500, message = "Error" } = err;
    // res.status(statusCode).send(message);

    res.status(statusCode).render("listing/error.ejs", { message });
});

app.listen(8080, () => {
    console.log("listening on 8080");
});