const express = require("express");
const router = express.Router();
const { posts } = require("../data.js");

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(posts);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let result = posts[id - 1];
  res.set("Access-Control-Allow-Origin", "*");
  res.json(result);
});

router.get("/user/:id", (req, res) => {
  let userId = req.params.id;
  let values = Object.values(posts);
  res.set("Access-Control-Allow-Origin", "*");
  for (let i = 0; i < values.length; i++) {
    if (values[i].userId === Number(userId)) res.json(values[i]);
  }
});

router.get("*", (req, res) => {
  res.status(404).json({
    message: "Error"
  });
});

module.exports = router;
