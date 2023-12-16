const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const {
  getAdmin,
  registerAdmin,
  loginAdmin,
} = require("../../controllers/Admin/adminAuth");

router.get("/", authenticate, getAdmin); //responds with json only when Status is OK

router.post("/register", registerAdmin); //post with body --> email & password

router.post("/login", loginAdmin); //post with body --> email & password

module.exports = router;
