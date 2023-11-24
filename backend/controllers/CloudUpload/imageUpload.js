require('dotenv').config()
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config();

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});



const uploadImageToCloud = (req, res) => {
    if (!req.file) {
      return res.status(400).json({msg : 'No file uploaded.'});
    }
  
    // Upload image to Cloudinary
    cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({msg : 'Error uploading image to Cloudinary.'});
      }
  
      // Handle the result of the upload
      res.json({msg : 'Image uploaded successfully!',imgUrl : result.secure_url});
    }).end(req.file.buffer);
  }

module.exports = {
    uploadImageToCloud
}

