const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    ownerName:{
        type:String,
        required:true
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
    verified:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

const vendor = mongoose.model("Vendor", VendorSchema);
module.exports = vendor;
