const userModel = require("../../database/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//register new users
async function registerUser(req, res) {
  const { name, phoneNumber, emailId, location, password } = req.body;
  //generates a random username from the email id
  let user = await userModel.findOne({ emailId });
  if (user) {
    return res
      .status(400)
      .json({ success: false, msg: "That user already exists!" });
  }
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  const newUser = new userModel({
    name,
    phoneNumber,
    emailId,
    location,
    password: encryptedPassword,
  });
  newUser
    .save()
    .then(() =>
      res.status(200).json({ msg: "new user created", success: true })
    )
    .catch((err) =>
      res.status(400).json({ msg: "something went wrong", err, success: false })
    );
}
//create session for existing users
async function loginUser(req, res) {
  const { emailId, password } = req.body;
  const userData = await userModel.findOne({
    emailId,
  });
  if (userData === null)
    return res.json({
      msg: "user does not exist", //user not found
      success: false,
    });
  if (bcrypt.compareSync(password, userData.password)) {
    //create a json token
    const token = jwt.sign(
      {
        emailId: emailId,
        id: userData._id,
        type: "user",
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    return res.json({
      success: true,
      msg: "authenticated",
      username: userData.name,
      userId: userData._id,
      token: token, //Needs to be stored in client cookies as token
    });
  } else
    res.json({
      success: false,
      msg: "authentication failed", //invalid credentials - Unauthorized
    });
}
//identifies the current user
function getUser(req, res) {
  const { id } = req.user;

  userModel
    .findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => res.sendStatus(404));
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
