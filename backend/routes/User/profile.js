const express = require("express");
const router = express.Router();
const multer = require("multer"); // For handling file uploads (install multer: npm install multer)
const authenticateToken = require("../../middleware/authenticate");
const { updateProfile } = require("../../controllers/User/updateUser");
const { getUser } = require("../../controllers/User/userAuth");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET user profile - Fetch profile data for the authenticated user
router.get("/", authenticateToken,getUser);
router.put("/",authenticateToken, updateProfile);

module.exports = router;
