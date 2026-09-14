const express = require('express');
const router = express.Router({mergeParams : true});
const wrapasync = require("../utils/wrapasync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,validateReview, isOwner, isReviewAuthor } = require("../middleware.js");


//review route
router.post("/",isLoggedIn,validateReview,wrapasync(async (req,res)=>
{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    console.log(newReview);

    await newReview.save();
    await listing.save();
    let populatedreview = await newReview.populate("author");
    req.flash("success","Review added Successfully!");

    res.redirect(`/listing/${listing._id}`);
}));

// delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapasync(async (req,res)=>
{   
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{ $pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted Successfully!");

    res.redirect(`/listing/${id}`);
}));

module.exports = router;