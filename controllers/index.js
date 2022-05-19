const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard_routes')
const groupRoutes = require('./group_routes')
const homeRoutes = require('./home_routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/group', groupRoutes);
router.use('/api', apiRoutes);

module.exports = router;