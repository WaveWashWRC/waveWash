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
  "Gardening",
];
const AdSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    expiresAt: {
      type: Date,
    },
    desc: {
      type: String,
    },
    location: {
      pincode: Number,
      state: String,
      city: String,
      address: String,
    },
    images: [
      {
        type: String,
      },
    ],
    services: {
      category: {
        type: String,
        enum: serviceCategory,
      },
      expectedPrice: {
        type: mongoose.Types.Decimal128,
      },
    },
    bidders: [
      {
        vendor: {
          type: mongoose.Schema.ObjectId,
          ref: "Vendor",
        },
        cost: {
          type: mongoose.Types.Decimal128,
          required: true,
        },
      },
    ],
    booking: {
      status: {
        type: Boolean,
        default: false,
      },
      vendor: {
        type: mongoose.Schema.ObjectId,
        ref: "Vendor",
      },
      cost: {
        type: mongoose.Types.Decimal128,
      },
    },
  },
  { timestamps: true }
);

AdSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const ads = mongoose.model("Ads", AdSchema);
/* ads.createIndex( { location.city: "text", desc: "text" } ) */
module.exports = ads;
