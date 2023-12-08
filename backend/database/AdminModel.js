const mongoose = require("mongoose");
//customers
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images:[
        {type: String}   
    ],
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
    region: {
      city: String,
    }
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
module.exports = user;
