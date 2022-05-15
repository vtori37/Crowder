const { Post } = require('../models');

postData = [
  {
    title: 'Excited to learn!',
    post_text: 'I hope you all are as excited as me to branch off into a more specific programming field!',
    user_id: 1,
    event_id: 1
  },
  {
    title: 'No way...',
    post_text: 'BEYONCE IS HAVING A CONCERT?! Does anyone want to meet up before hand and grab food?!',
    user_id: 2,
    event_id: 2
  },
  {
    title: 'Question',
    post_text: 'When will the Zoom link be posted?',
    user_id: 3,
    event_id: 3
  },
  {
    title: 'Tips?',
    post_text: 'I have never attended a professional seminar. Any tips?',
    user_id: 4,
    event_id: 4
  },
  {
    title: 'Introduction',
    post_text: 'Hi all, just wanted to introduce myself before hand as the seminar host!',
    user_id: 5,
    event_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;