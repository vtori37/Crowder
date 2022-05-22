const router = require('express').Router();

const userRoutes = require('./user_routes.js');
const postRoutes = require('./post_routes');
const commentRoutes = require('./comment_routes');
const eventRoutes = require('./event_routes');
const reactionRoutes = require('../../ignore/Reaction_routes');
const forumRoutes = require('../../ignore/forum_routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/events', eventRoutes);

module.exports = router;