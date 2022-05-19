const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment, Event } = require('../models');

// dashboard attributed to user id
router.get('/:id', (req, res) => {
  // get user info
  User.findOne({
    where: {id: req.params.id},
    attributes: ['username', 'email', 'biography', 'twitter'] // add random img
  })
  .then(dbUserData => {
    // wait for dasboard hbs
    console.log(dbUserData);
  });
  // get posts
  Post.findAll({
    attributes: ['id', 'title', 'post_text', 'user_id', 'event_id', 'created_at'],
    include: {
      model: User,
      attributes: ['username']
    }
  })
  .then(dbPostData => {
    // wait for dasboard hbs
    console.log(dbPostData)

  });
  // get events
  Event.findAll({
    attributes: ['id', 'event_title', 'event_summary', 'event_url', 'event_start', 'event_end', 'event_image', 'event_code']
  })
  .then(dbEventData => {
    // wait for dasboard hbs
    console.log(dbEventData);
  });
});

// edit posts


// create a post




module.exports = router;