const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const method_override = require('method-override');
const ExpressError = require("./utils/expresserror.js");
const session = require("express-session");
const flash = require("connect-flash");


//session options and define
let sessionoption = {
    secret : "mysupersecretcode",
    resave : true,
    saveUninitialized : true,
    cookie :
    {
        expires : new Date(Date.now() + 7*24*60*60*1000),
        maxAge :  7*24*60*60*1000,
        httpOnly : true,
    }
};

app.use(session(sessionoption));

// flash
app.use(flash());

//middleware to access the flash
app.use((req, res, next) => {
    res.locals.successmsg = req.flash("success");
    res.locals.errormsg = req.flash("error");
    next();
});

//require routers
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

const ejsMate = require('ejs-mate');
app.engine('ejs', ejsMate);

//method-override
app.use(method_override('_method'));

// url 
const mongo_url = 'mongodb://127.0.0.1:27017/WanderLust';

//models
const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");

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

//route middlewares
app.use("/listing",listings);
app.use("/listing/:id/reviews",reviews);

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