const express = require('express');
const mongoose = require('mongoose');
const cardRouter = require('./routes/cards');
const app = express();

mongoose.connect("mongodb://localhost/obc", { useUnifiedTopology: true, useNewUrlParser: true })

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render('cards/index')
});

app.use("/cards", cardRouter)

app.use(express.static(__dirname + '/public'));

app.listen("5000", "localhost", () => {
    console.log("Server Started");
});