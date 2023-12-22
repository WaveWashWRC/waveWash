const admin = require('../../database/AdminModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//register new users
async function registerAdmin(req, res,next) {
  const { name, phoneNumber, emailId, city, password } = req.body;
  //generates a random username from the email id
  let user = await admin.findOne({ emailId });
  if (user) {
    return res
      .status(400)
      .json({ success: false, msg: "That admin already exists!" });
  }
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  const newUser = new admin({
    name,
    phoneNumber,
    emailId,
    region:{city : city},
    password: encryptedPassword,
  });
  newUser
    .save()
    .then(() =>
      next()
    )
    .catch((err) =>
      res.status(400).json({ msg: "something went wrong", err, success: false })
    );
}
//create session for existing users
async function loginAdmin(req, res) {
  const { emailId, password } = req.body;
  const userData = await admin.findOne({
    emailId,
  });
  if (userData === null)
    return res.json({
      msg: "admin does not exist", //user not found
      success: false,
    });
  if (bcrypt.compareSync(password, userData.password)) {
    //create a json token
    const token = jwt.sign(
      {
        emailId: emailId,
        id: userData._id,
        type:'admin'
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    console.log(token);
    return res.json({
      success: true,
      msg: "authenticated",
      username: userData.name,
      adiminId: userData._id,
      token: token, //Needs to be stored in client cookies as token
    });
  } else
    res.json({
      success: false,
      msg: "authentication failed", //invalid credentials - Unauthorized
    });
}
//identifies the current user
function getAdmin(req, res) {
  const { id } = req.user;

  admin
    .findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => res.sendStatus(404));
}

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdmin,
};
