const express = require("express");
const router = express.Router();

const cors = require("cors");

const { registerUser, loginUser, getUser } = require("../controllers/auth");
const authenticate = require("../middleware/authenticate");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", (req, res) => {
  res.json({ msg: "Get all apis" });
  console.log("Welcome");
});

router.get("/user", authenticate, getUser); //responds with json only when Status is OK

router.post("/register", registerUser); //post with body --> email & password

router.post("/login", loginUser); //post with body --> email & password

module.exports = router;
