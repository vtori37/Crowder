const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Reaction = require('./Reaction');
// const Forum = require('./Forum');
const Event = require('./Event');

// associations 

// User
User.hasMany(Post, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
  foreignKey: 'user_id'
});


// Post
Post.belongsTo(User, {
  foreignKey: 'user_id'
});
Post.belongsTo(Event, {
  foreignKey: 'event_id'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});


// Comment
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// Event
Event.hasMany(Post)


module.exports = { User, Post, Comment, Reaction, Event };