const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../../controllers/User/userAuth");
const authenticate = require("../../middleware/authenticate");

router.get("/user", authenticate, getUser); //responds with json only when Status is OK

router.post("/register", registerUser); //post with body --> email & password

router.post("/login", loginUser); //post with body --> email & password

module.exports = router;
