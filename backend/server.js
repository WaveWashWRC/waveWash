require("dotenv").config();

const { mongoConnect } = require("./database/connect");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3300;

const userAuthRouter = require("./routes/User/auth");
const vendorAuthRouter = require("./routes/Vendor/auth");
const vendorProfileRouter = require('./routes/Vendor/profile')
const adRouter = require("./routes/Ads/index");
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://service.localhost:5173", "http://localhost:5173"],
  })
);
app.use("/api/auth/", userAuthRouter);
app.use("/api/auth/vendor", vendorAuthRouter);
app.use("/api/profile",vendorProfileRouter);
app.use("/api/ad/", adRouter);

app.listen(port, () => {
  console.log("Server is live at port " + port);
});
