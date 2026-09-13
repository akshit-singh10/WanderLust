const express = require('express');
const router = express.Router({mergeParams : true});
const wrapasync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/expresserror.js");
const { reviewSchema } = require('../schema.js');
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");




//validate review
const validateReview = (req,res,next) =>
{
    let {error} = reviewSchema.validate(req.body);
    if(error)
    {
        let errmsg = error.details.map((el) => el.message ).join(",");
        console.log(error);
        throw new ExpressError(400,errmsg);
    }
    next();
};


//review route
router.post("/",validateReview,wrapasync(async (req,res)=>
{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success","Review added Successfully!");

    res.redirect(`/listing/${listing._id}`);
}));

// delete review route
router.delete("/:reviewId",wrapasync(async (req,res)=>
{   
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{ $pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted Successfully!");

    res.redirect(`/listing/${id}`);
}));

module.exports = router;