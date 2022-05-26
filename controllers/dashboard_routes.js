const router = require('express').Router();
const { User, Post, Event, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {user_id: req.session.user_id},
    include: [
      {
        model: User,
        attributes: ['id', 'username', 'email', 'biography', 'user_img']
      },
      {
        model: Event,
        attributes: ['event_title']
      },
      {
        model: Comment
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
      console.log(renderData);
      res.render('user_dashboard', {renderData, loggedIn: true})
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// edit a post in the 'your posts' section
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: ['id', 'title', 'post_text', 'createdAt'],
  })
  .then(dbPostData => {
    if (dbPostData) {
      const post = dbPostData.get({plain:true});
      console.log(post)
      res.render('edit_post', { post });
    } else {
      res.status(404).end();
    }
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;