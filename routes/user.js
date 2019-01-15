const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser')
const data = require('../data.js')

//============================
const showAllUsers = (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");

  res.json({listOfUsers: data.users})
}

//==========================
const singleUserById = (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  let id = req.params.id

  let findUser = data.users.find(object => {
    return object.id == id
  })

  if (findUser) {
    res.json(findUser)
  } else {
    res.json('NOT A USER')
  }
}

//============================
router.get('/', showAllUsers)
router.get('/:id', singleUserById)
//============================

module.exports = router;
