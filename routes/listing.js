const express = require('express');
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, saveRedirectUrl, isOwner, validateListing, isReviewAuthor } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');

const {storage,cloudinary} = require('../cloudConfig.js');
const upload = multer({storage});

router.route("/searchfilter")
        .get(wrapasync(listingController.searchfilter));

router.route("/filter/:category")
            .get(wrapasync(listingController.filterRequest));
router.route("/")
    .get(wrapasync(listingController.index))
    .post(isLoggedIn,validateListing, upload.single('listing[image]'),wrapasync(listingController.createListing));
    
// new route — must stay before "/:id", or "/new" gets matched as an :id param
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
    .get(wrapasync(listingController.showListing))
    .patch(isLoggedIn, saveRedirectUrl, isOwner,upload.single('listing[image]') ,validateListing, wrapasync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapasync(listingController.deleteListing));

router.get("/:id/edit", isLoggedIn, saveRedirectUrl, isOwner, wrapasync(listingController.editListing));


module.exports = router;