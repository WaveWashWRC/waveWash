const mongoose = require("mongoose");

const serviceCategory = [
    "Car wash - Hatchback",
    "Car wash - Sedan",
    "Car wash - SUV",
    "Bike wash",
    "Tank and Sump wash",
    "Aquarium wash",
    "Pet wash",
    "Bathroom and Tiles cleaning",
    "Carpet, Sofa, and curtain cleaning",
    "Gardening"
    ];
const AdSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref:'User'
    },
    desc:{
        type:String
    },
    location: {
        pincode: Number,
        state: String,
        city: String,
        address: String,
        landmark: String,
    },
    images:[{
        type:String
    }],
    services:{
            category: {
                type:String,
                enum:serviceCategory
            },
            expectedPrice:{
                type: mongoose.Types.Decimal128,
            }
        }
  },
  { timestamps: true }
);

const ads = mongoose.model("Ads", AdSchema);
/* ads.createIndex( { location.city: "text", desc: "text" } ) */
module.exports = ads;
