const router = require('express').Router();

const apiRoutes = require('./api');
// const dashboardRoutes = require('./dashboard_routes')
// const groupRoutes = require('./group_routes')
// const homepageRoutes = require('./home_routes');

// router.use('/', homepageRoutes);
// router.use('/dashboard', dashboardRoutes)
// router.use('/group', groupRoutes);
router.use('/api', apiRoutes);

module.exports = router;