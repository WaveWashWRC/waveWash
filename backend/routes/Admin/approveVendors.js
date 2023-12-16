const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const {
  approveVendor,
  getVendors,
} = require("../../controllers/Admin/approve");

router.post("/approve/:vendorId", authenticate, approveVendor);

router.get("/vendors", getVendors);

module.exports = router;
