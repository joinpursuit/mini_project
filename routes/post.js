const express = require("express");
const router = express.Router();
const { users, posts, pictures } = require("../data.js");

router.get("/", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(posts);
});

router.get("/:id", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  let found = posts.find(post => post.id === +req.params.id);
  found ? res.json(found) : res.send('Invalid POST ID.  Sorry :"(');

  // let found = false;

  // posts.forEach(elObj => {
  //   let arrValues = Object.values(elObj)
  //   if (arrValues[0] === +req.params.id) {
  //     res.json(elObj);
  //     found = true;
  //   }
  // })
  //
  // if (!found) {
  //   res.send('Invalid POST ID.  Sorry :"(' );
  // }
});

module.exports = router;
