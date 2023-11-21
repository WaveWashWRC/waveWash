const vendorModel = require("../../database/VendorModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//register new users
async function registerVendor(req, res,next) {
  const { companyName, ownerName, phoneNumber, emailId, location, password } = req.body;
  //generates a random username from the email id
  let vendor = await vendorModel.findOne({ emailId });
  if (vendor) {
    return res
      .status(400)
      .json({ success: false, msg: "Vendor ID already registered" });
  }
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  const newVendor = new vendorModel({
    companyName,
    ownerName,
    phoneNumber,
    emailId,
    location,
    password: encryptedPassword,
  });
  newVendor
    .save()
    .then(() =>
      next()
    )
    .catch((err) =>
      res.status(400).json({ msg: "something went wrong", err, success: false })
    );
}
//create session for existing users
async function loginVendor(req, res) {
  const { emailId, password } = req.body;
  const vendorData = await vendorModel.findOne({
    emailId,
  });
  if (vendorData === null)
    return res.json({
      msg: "vendor does not exist", //user not found
      success: false,
    });
  if (bcrypt.compareSync(password, vendorData.password)) {
    //create a json token
    const token = jwt.sign(
      {
        emailId: emailId,
        id: vendorData._id,
        type: 'vendor',
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    return res.json({
      success: true,
      msg: "authenticated",
      companyName: vendorData.companyName,
      vendorId: vendorData._id,
      token: token, //Needs to be stored in client cookies as token
    });
  } else
    res.json({
      success: false,
      msg: "authentication failed", //invalid credentials - Unauthorized
    });
}
//identifies the current user
function getAuthenticatedVendor(req, res) {
  const { id } = req.user;
  console.log(id,req.user)
  let vendor = vendorModel.findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(404);
    });
}

module.exports = {
  registerVendor,
  loginVendor,
  getAuthenticatedVendor,
};
