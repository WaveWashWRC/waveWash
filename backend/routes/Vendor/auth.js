const express = require("express");
const router = express.Router();
const {registerVendor,loginVendor,getAuthenticatedVendor} = require('../../controllers/Vendor/vendorAuth')
const authenticate = require("../../middleware/authenticate");


router.get("/", authenticate, getAuthenticatedVendor); //responds with json only when Status is OK

router.post("/register", registerVendor,loginVendor); //post with body --> email & password

router.post("/login", loginVendor); //post with body --> email & password

module.exports = router;
