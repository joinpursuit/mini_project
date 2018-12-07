let express = require('express')
let router = express.Router()


let posts = [
  {
    id: 1,
    userId: 6,
    body:
    "Creative learning curve business plan. Conversion bandwidth partner network traction deployment focus leverage. Monetization social proof marketing scrum project investor innovator stock."
  },
  {
    id: 2,
    userId: 2,
    body:
    "Growth hacking twitter iPad assets beta holy grail prototype. Monetization accelerator supply chain social media prototype angel investor responsive web design focus investor churn rate business model canvas mass market android infrastructure."
  },
  {
    id: 3,
    userId: 4,
    body:
    "Freemium MVP graphical user interface bandwidth crowdfunding stealth. Deployment traction pitch innovator beta monetization iPhone pivot."
  },
  {
    id: 4,
    userId: 8,
    body:
    "Vesting period virality prototype focus interaction design infrastructure founders accelerator backing responsive web design bandwidth entrepreneur early adopters long tail. Termsheet focus scrum project innovator prototype. Social proof ownership influencer. Client marketing twitter partner network prototype customer iPad."
  },
  {
    id: 5,
    userId: 3,
    body:
    "Low hanging fruit ownership prototype stealth sales ecosystem stock infographic beta freemium."
  },
  {
    id: 6,
    userId: 1,
    body:
    "Ownership direct mailing hackathon handshake equity facebook strategy non-disclosure agreement leverage value proposition deployment incubator."
  },
  {
    id: 7,
    userId: 9,
    body:
    "Equity assets beta early adopters startup ownership iteration user experience android angel investor focus branding market success. Network effects deployment MVP hypotheses influencer startup social media."
  },
  {
    id: 8,
    userId: 10,
    body:
    "Monetization android strategy crowdfunding launch party infographic ecosystem value proposition agile development."
  },
  {
    id: 9,
    userId: 5,
    body:
    "A/B testing hypotheses ecosystem entrepreneur conversion interaction design. Seed money funding pitch."
  },
  { id: 10, userId: 7, body: "Disruptive value proposition metrics." }
];

router.get('/', (req, res) => {
  res.json(posts)
})

router.get('/:id', (req, res) => {
  let postId = parseInt(req.params.id)

  if(isNaN(postId)) {
    res.json('Please enter a proper id!')
  }else if (postId > 10 || postId < 1) {
    res.json('Please enter a number from 1 - 10!')
  }else {
    posts.forEach(el => {
      if(postId === el.id) {
        res.json(el)
      }
    })
  }
})

router.get('/users/:id', (req, res) => {

  let postUserId = parseInt(req.params.id)

  if(isNaN(postUserId)) {
    res.json('Please enter a valid user id')
  }else if(postUserId > 10 || postUserId < 1) {
    res.json('Please enter a number from 1 - 1-!')
  }else {
    let newPost = []
    posts.forEach(el => {
      if(postUserId === el.userId) {
        newPost.push(el)
      }
    })
    res.json(newPost)
  }
})





module.exports = router
