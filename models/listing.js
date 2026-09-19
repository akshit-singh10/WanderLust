const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require("./reviews.js");
const { Strin } = require('joi');
const { cloudinary } = require("../cloudConfig.js");


const listingSchema = new Schema({
    title:
    {
        type: String,
        required: true
    },
    description: String,
    image:
    {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner:
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    category: {
        type: String,
        enum: [
            "trending",
            "rooms",
            "iconic",
            "mountains",
            "castles",
            "swimming",
            "camping",
            "farms",
            "arctic",
            "domes",
            "boats",
            "others",
        ]
        // required: true  // uncomment once all listings have a category
    }
});

listingSchema.post("findOneAndDelete", async (list) => {
    if (!list) {
        return;
    }
    if (list.image && list.image.filename) {
        await cloudinary.uploader.destroy(list.image.filename);
    }
    await Review.deleteMany({ _id: { $in: list.reviews } });
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;