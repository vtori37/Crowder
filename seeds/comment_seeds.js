const { Comment } = require('../models');

let commentData = [
  {
    comment_text: 'I am just as excited!',
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: 'I cannot believe it either...',
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: 'I heard the Zoom link is TBA. Probably before the event start!',
    post_id: 3,
    user_id: 3
  },
  {
    comment_text: 'Have questions ready!',
    post_id: 4,
    user_id: 4
  },
  {
    comment_text: 'Nice to meet you :)',
    post_id: 5,
    user_id: 5
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

