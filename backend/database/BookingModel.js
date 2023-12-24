const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    vendorId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Vendor",
    },
    customerId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    serviceCategory: {
      type: String,
      required: true,
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
    cost: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    // rating: {
    //   type: Number,
    //   min: 1,
    //   max: 5,
    // },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;
