// Import functions made in controllers
const { getThought, createThought, updateThought } = require('../../controllers/thoughtController');
const router = require('express').Router();

// Create GET,POST,PUT routes for thoughts
router.route('/').get(getThought).post(createThought);
router.route('/:thought_id').put(updateThought);

module.exports = router;