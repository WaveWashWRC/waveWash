const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const VendorModel = require("./models/Vendormodel");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

//new auth code
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());

mongoose.connect("mongodb://127.0.0.1:27017/Vendor");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("token is not available");
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) return res.json("token is wrong");
      next();
    });
  }
};

app.get("/home", verifyUser, (req, res) => {
  console.log(req.cookies);
  return res.json("success");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await VendorModel.findOne({ email: email });

    if (user) {
      const passwordMatch = bcrypt.compareSync(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign({ email: user.email }, "jwt-secret-key");
        res.cookie("token", token, { path: "/" });
        res.json("success");
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record exists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const newVendor = await VendorModel.create(req.body);
    res.json(newVendor);
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

app.options("/signup", cors());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
