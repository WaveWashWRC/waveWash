const mongoose = require("mongoose");
const serviceCategory = [
  "Car wash - Hatchback",
  "Car wash - Sedan)",
  "Car wash - SUV)",
  "Bike wash",
  "Tank and Sump wash",
  "Aquarium wash",
  "Pet wash",
  "Bathroom and Tiles cleaning",
  "Carpet, Sofa, and curtain cleaning",
  "Gardening"
  ];
const VendorSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      pincode: Number,
      state: String,
      city: String,
      address: String,
      landmark: String,
    }, 
    images:[
      {
        type:String
      }
    ],
    services: [ //they provide
      {
        category: {
          type: String,
          enum: serviceCategory
        },
        price: {
          type: mongoose.Types.Decimal128,
        }
      }
    ],

    reviews: [ //they provide
      {
        comment: {
          type: String,
          enum: serviceCategory
        },
        author: {
          type: mongoose.Schema.ObjectId,
          ref:'User'
        },
        rating:{
          type:Number,
          enums:[1,2,3,4,5]
        }        
      },
    ],
    rating:{
      type:Number
    },
    verified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const vendor = mongoose.model("Vendor", VendorSchema);
module.exports = vendor;
