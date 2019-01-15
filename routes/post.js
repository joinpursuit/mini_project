const express = require('express');
const router = express.Router();
const data = require('../data.js')

//==========================
const allPosts = (req, res) => {
  res.json(data.posts)
}

//==========================
const postById = (req, res) => {
  let id = req.params.id

  let findPost = data.posts.find(object => {
    return object.id == id
  })

  findPost ? res.json(findPost) : res.json('Not a post')
}


//==========================
const postsByUserId = (req, res) => {
  let userId = req.params.id

  let findPost =  data.posts.find(object =>  object.userId == userId)

  findPost ? res.json(findPost) : res.json('This user made no posts.')
}


//==========================
router.get('/', allPosts);
router.get('/:id', postById)
router.get('/user/:id', postsByUserId)

//==========================
module.exports = router;

//==========================
