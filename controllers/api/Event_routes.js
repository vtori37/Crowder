const router =  require('express').Router();
const { Post, Event } = require('../../models')
const withAuth = require('../../utils/auth')

// get all events
router.get('/', withAuth, (req, res) => {
  Event.findAll({
    attributes: ['id', 'event_title', 'event_summary', 'event_url', 'event_start', 'event_end', 'event_code'],
    include: [{
      model: Post,
      attributes: ['id', 'title', 'post_text', 'user_id']
    }]
  })
  .then(dbEventData => {
    res.json(dbEventData)
  })
  .catch(console.log);
});

// get event by id
router.get('/:id', withAuth, (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'event_title', 'event_summary', 'event_url', 'event_start', 'event_end', 'event_code']
  })
  .then(dbEventData => {
    if (!dbEventData) {
      res.status(404).json({ message: 'No event found with this id' });
      return;
    }
    res.json(dbEventData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// post a new event
router.post('/', withAuth, (req, res) => {
  Event.create({
    event_title: req.body.event_title,
    event_summary: req.body.event_summary,
    event_url: req.body.event_url,
    event_start: req.body.event_start,
    event_end: req.body.event_end,
    event_img: req.body.event_img,
  })
  .then(dbEventData => res.json(dbEventData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// delete an event
router.delete('/:id', withAuth, (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbEventData => {
    if (!dbEventData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(dbEventData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;