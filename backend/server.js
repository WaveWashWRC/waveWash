require("dotenv").config();

const { mongoConnect } = require("./database/connect");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3300;

const userAuthRouter = require("./routes/User/auth");
const userProfileRouter = require("./routes/User/profile");
const vendorAuthRouter = require("./routes/Vendor/auth");
const adminAuthRouter = require("./routes/Admin/auth");
const vendorProfileRouter = require('./routes/Vendor/profile')
const adRouter = require("./routes/Ads/index");
const adminApproveRouter =   require('./routes/Admin/approveVendors')
const approveVendors = require('./routes/Admin/approveVendors')
const cloudRouter = require('./routes/imageUploading')
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://admin.localhost:5173","http://service.localhost:5173", "http://localhost:5173"],
  })
);
app.use("/api/auth/", userAuthRouter);
app.use("/api/profile/user",userProfileRouter);
app.use("/api/auth/vendor", vendorAuthRouter);
app.use('/api/auth/admin',adminAuthRouter);
app.use('/api/admin/',adminApproveRouter)
app.use("/api/profile",vendorProfileRouter);
app.use("/api/approve",approveVendors);

app.use("/api/ad/", adRouter);
app.use("/api/upload",cloudRouter)

app.listen(port, () => {
  console.log("Server is live at port " + port);
});
