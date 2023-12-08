const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const { approveVendor, getVendors } = require("../../controllers/Admin/approve");




router.get("/approve/:vendorId", authenticate, approveVendor);

router.post("/vendors", getVendors); 


module.exports = router;
