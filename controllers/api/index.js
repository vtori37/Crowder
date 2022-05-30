const router = require('express').Router();

const userRoutes = require('./User_routes');
const postRoutes = require('./Post_routes');
const commentRoutes = require('./Comment_routes');
const eventRoutes = require('./Event_routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/events', eventRoutes);

module.exports = router;