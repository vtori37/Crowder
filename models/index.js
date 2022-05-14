const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Reaction = require('./Reaction');
const Forum = require('./Forum');
const Event = require('./Event');

// associations 
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
  through: Reaction,
  as: 'reacted_posts',
  foreignKey: 'user_id'
});

Reaction.belongsTo(User, {
  foreignKey: 'user_id'
});

Reaction.belongsTo(Post, {
  foreignKey: 'post_id'
});

// only have reactions to posts for now
// Reaction.belongsTo(Comment, {
//   foreignKey: 'comment_id'
// });

Post.hasMany(Reaction, {
  foreignKey: 'post_id'
});

// see line 29
// Comment.hasMany(Reaction, {
//   foreignKey: 'comment_id'
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment, Reaction };