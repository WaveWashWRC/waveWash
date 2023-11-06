require("dotenv").config();

const { mongoConnect } = require("./database/connect");
const cors  = require('cors')
const express = require("express");
const mongoose = require("mongoose");


const port = process.env.PORT || 3300;

const authRouter = require("./routes/authRouter");

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use("/api/auth/", authRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Server is live at port " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
