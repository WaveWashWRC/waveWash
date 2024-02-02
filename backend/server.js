require("dotenv").config();

const { mongoConnect } = require("./database/connect");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const path = require('path')
const port = process.env.PORT || 3300;

const userAuthRouter = require("./routes/User/auth");
const userProfileRouter = require("./routes/User/profile");
const vendorAuthRouter = require("./routes/Vendor/auth");
const adminAuthRouter = require("./routes/Admin/auth");
const vendorProfileRouter = require("./routes/Vendor/profile");
const adRouter = require("./routes/Ads/index");
const adminApproveRouter = require("./routes/Admin/approveVendors");
const approveVendors = require("./routes/Admin/approveVendors");
const cloudRouter = require("./routes/imageUploading");
const bookingRouter = require("./routes/Booking/bookingroute");
const app = express();

app.use(express.json());

app.use(
  cors()
);
app.use("/api/auth/", userAuthRouter);
app.use("/api/profile/user", userProfileRouter);
app.use("/api/auth/vendor", vendorAuthRouter);

app.use("/api/auth/admin", adminAuthRouter);
app.use("/api/admin/", adminApproveRouter);
app.use("/api/profile", vendorProfileRouter);
app.use("/api/approve", approveVendors);

app.use("/api/ad/", adRouter);
app.use("/api/upload", cloudRouter);

app.use("/api/booking", bookingRouter);
app.use(express.static(path.join(__dirname,"..","frontend","dist")));
app.get("*",(req,res) => {
  res.sendFile(path.join(__dirname,"..","frontend","dist","index.html"));
})
app.listen(port, () => {
  console.log("Server is live at port " + port);
});
