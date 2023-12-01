const express = require("express");
const router = express.Router();
const authenticate = require("./../middleware/authenticate");
const multer = require('multer');
const { uploadImageToCloud, uploadImageToCloud3, uploadAdPoster } = require("../controllers/CloudUpload/imageUpload");

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post("/image/1", authenticate,upload.single('image'),uploadImageToCloud);
router.post("/image/3", authenticate,upload.array('images',3),uploadImageToCloud3);
router.patch("/ad/:id", authenticate,upload.array('images',3),uploadAdPoster);

module.exports = router;
