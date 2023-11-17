const mongoose = require("mongoose");
//customers
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    }
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
module.exports = user;
