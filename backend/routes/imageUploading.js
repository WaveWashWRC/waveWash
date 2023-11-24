const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const multer = require('multer');
const { uploadImageToCloud } = require("../controllers/CloudUpload/imageUpload");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post("/upload/image", authenticate,upload.single('image'),uploadImageToCloud);

module.exports = router;
