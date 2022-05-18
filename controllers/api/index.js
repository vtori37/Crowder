const router = require('express').Router();

const userRoutes = require('./User_routes.js');
const postRoutes = require('./post_routes');
const commentRoutes = require('./comment_routes');
const reactionRoutes = require('./Reaction_routes');
const eventRoutes = require('./Event_routes');
const forumRoutes = require('./Forum_routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
//router.use('/reactions', reactionRoutes);
//router.use('/events', eventRoutes);
//router.use('/forum', forumRoutes);

module.exports = router;