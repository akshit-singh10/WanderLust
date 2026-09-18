const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = new mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {  // /listing route (all listing)
    const allList = await Listing.find({});
    // res.locals.successmsg = req.flash("success");//
    res.render("listing/index.ejs", { allList });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let id = req.params.id;

    const list = await Listing.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }).populate("owner");
    console.log(list);

    if (!list) {
        // throw new ExpressError(404,"Listing you requested for doesn't exist!");
        req.flash("error", "Listing you requested for doesn't exist!");
        return res.redirect("/listing");
    }
    res.render("listing/show.ejs", { list });
};


module.exports.createListing = async (req, res, next) => {
    // let {title,description,price,location,country} = req.body;
    let newlisting = new Listing(req.body.listing);  // now newlisting is the direct document created newly

    let response = await geocodingClient.forwardGeocode({
        query: `${newlisting.location}, ${newlisting.country}`,
        limit: 1
    }).send();

    
    newlisting.owner = req.user._id;

    //geoJson
    newlisting.geometry = response.body.features[0].geometry;

    if (typeof (req.file) !== "undefined") {

        let url = req.file.path;
        let filename = req.file.filename;
        newlisting.image = { url, filename };
        let savedListing = await newlisting.save();
        console.log(savedListing);
        req.flash("success", "New List is added!");
        return res.redirect("/listing");
    }
    await newlisting.save();
    req.flash("success", "New List is added!");
    res.redirect("/listing");

};

module.exports.editListing = async (req, res) => {
    let editList = await Listing.findById(req.params.id);

    if (!editList) {
        // throw new ExpressError(404,"Listing you requested for doesn't exist!");
        req.flash("error", "Listing you requested for doesn't exist!");
        return res.redirect("/listing");
    }

    let originalImageUrl = editList.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_200");
    res.render("listing/edit.ejs", { list: editList, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let id = req.params.id;
    let listing = req.body.listing;
    let newlisting = await Listing.findOneAndUpdate({ _id: id }, { ...listing });

    if (typeof (req.file) !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        newlisting.image = { url, filename };
        await newlisting.save();
    }

    req.flash("success", "List is Upadated!");
    console.log("Edited");
    res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let deletedList = await Listing.findByIdAndDelete(req.params.id);
    req.flash("success", "List Deleted!");
    console.log("DELETED\n", deletedList);
    res.redirect("/listing");
};    