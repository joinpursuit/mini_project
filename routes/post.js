const express = require('express');
const router = express.Router();

let posts = [{
    id: 1,
    userId: 6,
    body: 'Creative learning curve business plan. Conversion bandwidth partner network traction deployment focus leverage. Monetization social proof marketing scrum project investor innovator stock.',
  },
  {
    id: 2,
    userId: 2,
    body: 'Growth hacking twitter iPad assets beta holy grail prototype. Monetization accelerator supply chain social media prototype angel investor responsive web design focus investor churn rate business model canvas mass market android infrastructure.',
  },
  {
    id: 3,
    userId: 4,
    body: 'Freemium MVP graphical user interface bandwidth crowdfunding stealth. Deployment traction pitch innovator beta monetization iPhone pivot.',
  },
  {
    id: 4,
    userId: 8,
    body: 'Vesting period virality prototype focus interaction design infrastructure founders accelerator backing responsive web design bandwidth entrepreneur early adopters long tail. Termsheet focus scrum project innovator prototype. Social proof ownership influencer. Client marketing twitter partner network prototype customer iPad.',
  },
  {
    id: 5,
    userId: 3,
    body: 'Low hanging fruit ownership prototype stealth sales ecosystem stock infographic beta freemium.',
  },
  {
    id: 6,
    userId: 1,
    body: 'Ownership direct mailing hackathon handshake equity facebook strategy non-disclosure agreement leverage value proposition deployment incubator.',
  },
  {
    id: 7,
    userId: 9,
    body: 'Equity assets beta early adopters startup ownership iteration user experience android angel investor focus branding market success. Network effects deployment MVP hypotheses influencer startup social media.',
  },
  {
    id: 8,
    userId: 10,
    body: 'Monetization android strategy crowdfunding launch party infographic ecosystem value proposition agile development.',
  },
  {
    id: 9,
    userId: 5,
    body: 'A/B testing hypotheses ecosystem entrepreneur conversion interaction design. Seed money funding pitch.',
  },
  {
    id: 10,
    userId: 7,
    body: 'Disruptive value proposition metrics.',
  },
];

const getPosts = (req, res) => {
  res.json({
    message: posts,
  });
};

const getPost = (req, res) => {
  let post = isPost(req.params.id) || `invalid post id`;
  res.json({
    message: post,
  });
};

const isPost = (id) => {
  return posts.filter(post => (post.id === +id))[0];
};

const getUserPosts = (req, res) => {
  let userPost = isUserPost(req.params.id) || `invalid user posts id`;
  res.json({
    message: userPost,
  });
};

const isUserPost = (userId) => {
  return posts.filter(post => (post.userId === +userId));
};

router.get('/', getPosts);
router.get('/:id', getPost);
router.get('/user/:id', getUserPosts);

module.exports = router;
