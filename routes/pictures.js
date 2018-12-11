const express = require("express");
const router = express.Router();
const { pictures } = require("../data.js");

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(pictures);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let result = pictures[id - 1];
  res.set("Access-Control-Allow-Origin", "*");
  res.json(result);
});

router.get("/user/:id", (req, res) => {
  let userId = req.params.id;
  let values = Object.values(pictures);
  res.set("Access-Control-Allow-Origin", "*");
  for (let i = 0; i < values.length; i++) {
    if (values[i].userId === Number(userId)) res.json(values[i]);
  }
});

module.exports = router;
