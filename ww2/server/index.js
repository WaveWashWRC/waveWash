const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const VendorModel = require("./models/Vendormodel");

const app = express();
app.use(express.json);
app.use(cors());

mongoose.connect("mongodb://0.0.1:27017/Vendor");

app.post("/signup", (req, res) => {
  VendorModel.create(req.body)
    .then((vendors) => res.json(vendors))
    .catch((err) => res.json(err));
});
app.listen(3001, () => {
  console.log("server is running");
});
