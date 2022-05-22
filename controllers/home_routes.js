const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event, Post, Comment } = require('../models');

// landing
router.get('/', (req, res) => {
  Event.findAll({
    attributes: ['id', 'event_title', 'event_summary', 'event_url', 'event_start', 'event_end', 'event_image'],
    include: [{
      model: Post,
      attributes: ['id', 'title', 'post_text', 'user_id'],
      include: {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at']
      }
    }]
  })
  .then(dbEventData => {
    const events  = dbEventData.map(event => event.get({ plain: true }));
    res.render('landing_page', {
      events
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// login
router.get('/login', (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/dashboard');
  //   return;
  // }
  res.render('login_signup');
});

module.exports = router;