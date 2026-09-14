// const { findById } = require("./models/user");
const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");
const { listingSchema} = require('./schema.js');
const ExpressError = require("./utils/expresserror.js");
const { reviewSchema} = require('./schema.js');

//validate listing
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(",");
        console.log(error);
        throw new ExpressError(400, errmsg);
    }
    next();
};

//validate review
module.exports.validateReview = (req,res,next) =>
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

module.exports.isLoggedIn = (req,res,next)=>
{
     if (!req.isAuthenticated()) {
        if (req.method === "GET") {
            req.session.redirectUrl = req.originalUrl;
        }
        req.flash("error", "You need to Login first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next)=>
{
    if(req.session.redirectUrl)
    {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req,res,next)=>
{
    try {
    let {id} = req.params;
    let list = await Listing.findById(id);
    if(!res.locals.currUser._id.equals(list.owner._id))
    {
        req.flash("error","You are not the owner of this Listing!");
        return res.redirect(res.locals.redirectUrl || `/listing/${id}`);
    }
    } catch (error) {
        console.log(error);
    }
    next();
};

module.exports.isReviewAuthor = async (req,res,next)=>
{
    try {
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId).populate("author");
    if(!res.locals.currUser._id.equals(review.author._id))
    {
        req.flash("error","You can't access the reviews not created by you!");
        return res.redirect(res.locals.redirectUrl || `/listing/${id}`);
    }
    } catch (error) {
        console.log(error);
    }
    next();
};