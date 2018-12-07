const express = require('express');
const router = express.Router();
const data = require('./data.js');

router.get('/', (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json(data.pictures);
})

router.get('/:id', (req, res) => {
  let givenId = parseInt(req.params.id);
  let idToShow = givenId - 1;
  res.set("Access-Control-Allow-Origin", "*");
  res.json(data.pictures[idToShow]);
})

router.get('/user/:id', (req, res) => {
  let userId = parseInt(req.params.id);
  let pictureArr = data.pictures;
  for(let i = 0; i < pictureArr.length; i++) {
    if (userId === pictureArr[i].userId) {
      res.set("Access-Control-Allow-Origin", "*");
      res.json(pictureArr[i]);
    }
  }
  res.set("Access-Control-Allow-Origin", "*");
  res.json({
    message: 'No such a user, please check your input!'
  })
})

module.exports = router;