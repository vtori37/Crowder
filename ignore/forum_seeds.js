const { Forum } = require('../models');

let forumData = [
  {
    forum_title: 'Intro to DevOps Interview Prep Forum',
    forum_posts: 1,
    forum_comments: 1,
    event_id: 1
  },
  {
    forum_title: 'Beyoncé Concert Forum',
    forum_posts: 2,
    forum_comments: 2,
    event_id: 1
  },
  {
    forum_title: 'Hacking Your Cover Letter Forum',
    forum_posts: 3,
    forum_comments: 3,
    event_id: 1
  },
  {
    forum_title: 'Salary Negotiation: Know Your Worth Forum',
    forum_posts: 4,
    forum_comments: 4,
    event_id: 1
  },
  {
    forum_title: 'Design Patterns for JavaScript Forum',
    forum_posts: 5,
    forum_comments: 5,
    event_id: 1
  }
];

const seedForums = () => Forum.bulkCreate(forumData);

module.exports = seedForums;