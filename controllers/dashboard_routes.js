const router = require('express').Router();
const { User, Post, Event } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {user_id: req.session.user_id},
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'email', 'biography', 'user_img']
      }
    ]
  })
  .then(dbPostData => {
    let renderData = [];
    const posts = dbPostData.map(posts => posts.get({plain:true}));
    renderData.push(posts)

    Event.findAll({
      attributes: ['id', 'event_title', 'event_start', 'event_image', 'event_url']
    })
    .then(dbEventData => {
      const events = dbEventData.map(events => events.get({plain:true}));
      renderData.push(events)
      res.render('user_dashboard', {renderData})
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;