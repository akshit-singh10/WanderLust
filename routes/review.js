const express = require('express');
const router = express.Router({mergeParams : true});
const wrapasync = require("../utils/wrapasync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {isLoggedIn,validateReview, isOwner, isReviewAuthor } = require("../middleware.js");
const reviewController = require('../controllers/reviews.js');


//review route
router.post("/",isLoggedIn,validateReview,wrapasync(reviewController.addReview));

// delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapasync(reviewController.destroyReview));

module.exports = router;