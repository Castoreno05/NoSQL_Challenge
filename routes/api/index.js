const router = require('express').Router();
// Require userRoutes 
const userRoutes = require('./userRoutes');
// Require thoughtRoutes
const thoughtRoutes = require('./thoughtRoutes');

// http://localhost:9001/api/users
router.use('/users', userRoutes);
// http://localhost:9001/api/thoughts
router.use('/thoughts', thoughtRoutes);

module.exports = router;