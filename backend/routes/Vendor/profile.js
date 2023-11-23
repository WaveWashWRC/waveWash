const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer"); // For handling file uploads (install multer: npm install multer)

// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Sample Mongoose model, replace with your actual schema and model
const User = require("../../database/VendorModel");

// Middleware to protect routes - using your authentication middleware
router.use(authMiddleware);

// GET user profile - Fetch profile data for the authenticated user
router.get("/", async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user data in the request after authentication
    const userProfile = await User.findById(userId);
    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(userProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

// PUT update user profile - Update profile data for the authenticated user
router.put("/", upload.single("image"), async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, companyName, address, pincode } = req.body;

    // Assuming User is your Mongoose model/schema
    let userProfile = await User.findById(userId);

    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    userProfile.name = name || userProfile.name;
    userProfile.companyName = companyName || userProfile.companyName;
    userProfile.address = address || userProfile.address;
    userProfile.pincode = pincode || userProfile.pincode;

    if (req.file) {
      // Handle image upload if a new image is provided
      userProfile.image.data = req.file.buffer;
      userProfile.image.contentType = req.file.mimetype;
    }

    await userProfile.save();
    res.json(userProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
