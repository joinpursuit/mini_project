let express = require("express");
let data = require("../data.js");
let router = express.Router();

router.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  res.json({
    users: data.users
  })
});

router.get("/:id", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  let selectId = req.params.id
  let results =data.users[selectId - 1]
res.json(results)
});

module.exports = router;
