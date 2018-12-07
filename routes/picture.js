const express = require("express");
const router = express.Router();
const { users, posts, pictures } = require("../data.js");

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(pictures);
});

router.get("/:id", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let found = pictures.find(picture => picture.id === +req.params.id);
  found ? res.json(found) : res.send('Invalid PICTURE ID.  Sorry :"(');
});

module.exports = router;
