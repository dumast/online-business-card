const express = require("express");
const mongoose = require("mongoose");
const cardRouter = require("./routes/cards");
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(
  "mongodb://localhost/obc",
  // process.env.MONGODB_LINK,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("cards/index");
});

app.use("/cards", cardRouter);

app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("server is running")
})