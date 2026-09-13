const express = require('express');
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/expresserror.js");
const { listingSchema} = require('../schema.js');
const Listing = require("../models/listing.js");


//validate listing
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(",");
        console.log(error);
        throw new ExpressError(400, errmsg);
    }
    next();
};


router.get("/", async (req, res) => {  // /listing route (all listing)
    const allList = await Listing.find({});
    // res.locals.successmsg = req.flash("success");//
    res.render("listing/index.ejs", { allList });
});

// new route
router.get("/new", (req, res) => {
    res.render("listing/new.ejs");
});

//show specific list
router.get("/:id", wrapasync(async (req, res) => {
    let id = req.params.id;

    const list = await Listing.findById(id).populate("reviews");

    if(!list)
    {
        // throw new ExpressError(404,"Listing you requested for doesn't exist!");
        req.flash("error","Listing you requested for doesn't exist!");
        return res.redirect("/listing");
    }
    res.render("listing/show.ejs", { list });
}));



// create new route
router.post("/", validateListing, wrapasync(async (req, res, next) => {
    // let {title,description,price,location,country} = req.body;

    let listing = new Listing(req.body.listing); // now listing is the direct document

    await listing.save();
    req.flash("success","New List is added!");
    res.redirect("/listing");

}));

//edit or update

router.get("/:id/edit", wrapasync(async (req, res) => {
    let editList = await Listing.findById(req.params.id);

     if(!editList)
    {
        // throw new ExpressError(404,"Listing you requested for doesn't exist!");
        req.flash("error","Listing you requested for doesn't exist!");
        return res.redirect("/listing");
    }
    res.render("listing/edit.ejs", { list: editList });
}));

//update
router.patch("/:id", validateListing, wrapasync(
    async (req, res) => {
        let id = req.params.id;
        let listing = req.body.listing;
        await Listing.findOneAndUpdate({ _id: id }, { ...listing });
        req.flash("success","List is Upadated!");
        console.log("Edited");
        res.redirect(`/listing/${id}`);
    }
));

//delete
router.delete("/:id", wrapasync(async (req, res) => {
    let deletedList = await Listing.findByIdAndDelete(req.params.id);
    req.flash("success","List Deleted!");
    console.log("DELETED\n", deletedList);
    res.redirect("/listing");
}));

module.exports = router;