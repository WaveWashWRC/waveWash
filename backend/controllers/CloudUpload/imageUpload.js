require('dotenv').config()
const cloudinary = require('cloudinary').v2;
const vendor = require('../../database/VendorModel')
require('dotenv').config();

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});



const uploadImageToCloud = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ msg: 'No file uploaded.' });
  }

  // Upload image to Cloudinary
  cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Error uploading image to Cloudinary.' });
    }

    // Handle the result of the upload
    res.json({ msg: 'Image uploaded successfully!', imgUrl: result.secure_url });
  }).end(req.file.buffer);
}
const uploadImageToCloud3 = async (req, res) => {
  let results = [];
  const {type,id} = req.user
  if (!req.files)
    return res.json({ msg: 'nothing uploaded' })
  try {
    const promises = req.files.map((file) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
        stream.end(file.buffer);
      })
    );

    promises.map((promise,key) => promise.then(data => {
      results.push(data.secure_url)
      console.log(key,results);
      if(key === promises.length - 1){
        
            type === 'vendor' && vendor.updateOne({_id:id},{ 
              $set:{
                images:results
              }
            }).then(()=> res.json({success:true,results}))
              .catch(error => {
                throw error;
              })

        
      }
    }))
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
module.exports = {
  uploadImageToCloud,
  uploadImageToCloud3
}

