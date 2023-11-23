const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const VendorModel = require("./models/Vendormodel");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();

//new auth code
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);

app.use(cookieParser());

mongoose.connect(process.env.DB_CONNECTION_STRING);

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json("token is not available");
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
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
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
        res.cookie("token", token);
        res.json("Success");
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
