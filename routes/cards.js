const express = require("express");
const Card = require("./../models/card");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const card = await Card.findById(req.params.id);
  if (card == null) res.redirect("/");
  res.render("cards/show", { card: card });
});

router.post("/", async (req, res) => {
  let card = new Card({
    name: req.body.name,
    description: req.body.description,
    youtube: req.body.youtube,
    twitch: req.body.twitch,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    tiktok: req.body.tiktok,
    instagram: req.body.instagram,
    linkedin: req.body.linkedin,
    github: req.body.github,
  });
  try {
    card = await card.save();
    res.redirect(`/cards/${card.id}`);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
