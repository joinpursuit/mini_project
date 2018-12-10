const express = require("express");
const router = express.Router();
const { users, posts, pictures } = require("../data.js");

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(users);
});

router.get("/:id", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let found = users.find(user => user.id === +req.params.id);
  found ? res.json(found) : res.send('Invalid USER ID.  Sorry :"(');
});

module.exports = router;
