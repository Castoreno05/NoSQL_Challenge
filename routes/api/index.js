const router = require('express').Router();
// Require userRoutes 
const userRoutes = require('./userRoutes');

// http://localhost:9001/api/users
router.use('/users', userRoutes);

module.exports = router;