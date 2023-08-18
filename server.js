require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");
const app = express();

//from npm dotenv we have how to use this incluede first line
const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: FRONTEND, //give ip address more than one use array []
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());

app.use("/api/products", productRoute);

app.use(express.json());
//routes

app.get("/", (req, res) => {
  // throw new Error("Fake Error");
  res.send("Hello Node api");
});

app.get("/blog", (req, res) => {
  res.send("hello blog");
});

app.use(errorMiddleware);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });
