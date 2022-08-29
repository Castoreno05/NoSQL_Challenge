// Import functions made in controllers
const { getUsers, createUser, updateUser } = require('../../controllers/userController');
// Create router
const router = require('express').Router();

// Create GET,POST,PUT routes for users
router.route('/').get(getUsers).post(createUser);
router.route('/:user_id').put(updateUser);
module.exports = router;