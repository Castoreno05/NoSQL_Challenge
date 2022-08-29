const router = require('express').Router();
const apiRoutes = require('./api');

// Route to api folder
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Incorrect Route!'));

module.exports = router;