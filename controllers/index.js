const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const landingRoutes = require('./landing-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/landing', landingRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;