// Import functions made in controllers
const { getUsers, createUser, updateUser, getOneUser, deleteUser } = require('../../controllers/userController');
// Create router
const router = require('express').Router();

// Create GET,POST,PUT & DELETE routes for users
router.route('/').get(getUsers).post(createUser);
router.route('/:user_id').put(updateUser);
router.route('/:user_id').get(getOneUser);
router.route('/:user_id').delete(deleteUser);
module.exports = router;