const router = require('express').Router();
const { User, Post, Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Post.findAll({
    where: {user_id: req.session.userId},
    include: [User, Event]
  })
  .then(dbData => {
    console.log(dbData);
    res.render('user_dashboard', {
    posts: dbData    
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// dashboard attributed to user id
router.get('/:id', (req, res) => {
  const renderData = [];
  // get user info
  User.findOne({
    where: {id: req.params.id},
    attributes: ['username', 'email', 'biography', 'twitter', 'user_img'] // add random img
  })
  .then(dbUserData => {
    const { dataValues: user } = dbUserData;
    renderData.push(user)
  })
  // then get posts
  .then(Post.findAll({
    where: {
      user_id: req.params.id
    },
    attributes: ['id', 'title', 'post_text', 'user_id', 'event_id', 'created_at'],
    include: {
      model: User,
      attributes: ['username']
    }
  })
  .then(dbPostData => {
    const posts = dbPostData.map(posts => posts.get({plain:true}))
    renderData.push(posts)
  }))
  // then get events
  .then(
  Event.findAll({
    attributes: ['id', 'event_title', 'event_summary', 'event_url', 'event_start', 'event_end', 'event_image', 'event_code']
  })
  .then(dbEventData => {
    const events = dbEventData.map(events => events.get({plain:true}));
    renderData.push(events)
    res.render('user_dashboard', { renderData });
  }))
});

module.exports = router;