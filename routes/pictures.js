let express = require("express");
let data = require("../data.js");
let router = express.Router();

router.get("/", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  res.json({
    photos: data.pictures
  });
});

router.get("/:id", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  let selectId = req.params.id;
  let result = data.pictures[selectId - 1];

  res.json(result);
});

router.get("/user/:id", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  let uId = parseInt(req.params.id);
  data.pictures.forEach(el => {
    if(uId === el.id){
      res.json(el.url);
    }
  })
});

module.exports = router;
