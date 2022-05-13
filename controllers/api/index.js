const router = require('express').Router();

const userRoutes = require('./User_routes.js');
const postRoutes = require('./post_routes');
const commentRoutes = require('./comment_routes');
const reactionRoutes = require('./Reaction_routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;