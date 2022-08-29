// Import functions made in controllers
const { getThought, createThought, updateThought, getOneThought, deleteThought, addReaction, deleteReaction } = require('../../controllers/thoughtController');
const router = require('express').Router();

// Create GET,POST,PUT routes for thoughts
router.route('/').get(getThought).post(createThought);
router.route('/:thought_id').put(updateThought);
router.route('/:thought_id').get(getOneThought);
router.route('/:thought_id').delete(deleteThought);
router.route('/:thought_id/reactions').post(addReaction);
router.route('/:thought_id/reactions/:reactions_id').delete(deleteReaction);

module.exports = router;