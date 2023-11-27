const express = require("express");
const router = express.Router();
const {getAuthenticatedVendor} = require('../../controllers/Vendor/vendorAuth')
const multer = require("multer"); // For handling file uploads (install multer: npm install multer)
const authenticateToken = require("../../middleware/authenticate");
const { updateProfile } = require("../../controllers/Vendor/updateVendor");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET user profile - Fetch profile data for the authenticated user
router.get("/", authenticateToken,getAuthenticatedVendor);

// PUT update user profile - Update profile data for the authenticated user
router.put("/",authenticateToken,upload.array('image',3), updateProfile);

module.exports = router;
