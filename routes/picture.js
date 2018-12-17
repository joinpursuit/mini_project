const express = require('express');
const router = express.Router();
const data = require('../data.js');
//==============================

router.get('/', (req, res) => {
  res.json(
    data.pictures
  )
})

//==========================
router.get('/:id', (req, res) => {
  let id = req.params.id

  let findWithPictureId = data.pictures.find(object => {
    return object.id == id
  })

  findWithPictureId ? res.json(findWithPictureId) : res.json('A picture having this id does not exist.')
})


//==========================
router.get('/user/:id', (req, res) => {
  let userId = req.params.id

  let findPictureByUserId = data.pictures.find(objElement => {
    return objElement.userId === parseInt(userId)
  })

  findPictureByUserId ? res.json(findPictureByUserId) : res.json('Either no picture belonging to this user exists  or else this user does not exist.')
})


//==========================

module.exports = router
