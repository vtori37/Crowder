const router = require('express').Router();
const { User, Post, Comment, Event } = require('../models')
const withAuth = require('../utils/auth');

// see a group by id [return users, posts, comments, and events so that the post can be linked to an event]
router.get('/:id', withAuth, (req, res) => {
  // get post data with user & comment data included
  Post.findAll({
    where: {
      event_id: req.params.id
    },
    attributes: ['id', 'title', 'post_text', 'user_id', 'event_id', 'created_at'],
    include: [{
      model: User,
      attributes: ['id', 'username'],
    },
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'user_id'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
    {
      model: Event,
      where: {id: req.params.id}
    }]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.json(404).json({ message: 'No group found with this id!' });
    }
    const posts = dbPostData.map(posts => posts.get({plain:true}));
    console.log(posts)

    res.render('event_group', { posts,
    loggedIn: req.session.loggedIn });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// view a single post
router.get('/:id', withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'post_text',
      'user_id',
      'createdAt',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    const post = dbPostData.get({ plain: true });
    // pass data to template
    res.render('single_user_post', {post});
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;