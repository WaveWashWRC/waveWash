const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  name: String,
  email: String,
  companyname: String,
  address: String,
  state: String,
  city: String,
  password: String,
  pincode: Number,
  phonenum: Number,
});

const VendorModel = mongoose.model("vendors", VendorSchema);
module.exports = VendorModel;
