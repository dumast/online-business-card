const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cardRouter = require("./routes/cards");
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGODB_LINK,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("cards/index");
});

app.use("/cards", cardRouter);

app.use(express.static(__dirname + "/public"));

app.listen("5000", "localhost", () => {
  console.log("Server Started");
});
