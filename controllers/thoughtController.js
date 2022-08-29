const { Thoughts } = require("../models");

// GET function to return all thoughts
function getThought(req, res) {
  Thoughts.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
}

// POST function to create thoughts
function createThought(req, res) {
  Thoughts.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
}

// PUT function to update
function updateThought(req, res) {
  Thoughts.findOneAndUpdate(
    { _id: req.params.thought_id },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought with this ID" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
}

// GET a single thought
function getOneThought(req, res) {
  Thoughts.findOne({ _id: req.params.thought_id })
    .then((thought) => {
      if (!thought) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(thought);
    })
    .catch((err) => res.status(500).json(err));
}

// DELETE a thought
function deleteThought(req, res) {
  Thoughts.findOneAndDelete({ _id: req.params.thought_id })
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
}
// ----------------------------------------------------------------------------------------------------------------------
// POST a reaction to a thought
function addReaction(req, res) {
  Thoughts.findOneAndUpdate(
    { _id: req.params.thought_id },
    { $addToSet: { reactions: req.body } },
    { new: true }
  )
    .then((thought) => {
      if (!thought) {
        return res.status(404).json({ message: "No thought with this id" });
      }
      res.json(thought);
    })
    .catch((err) => res.status(500).json(err));
}

// DELETE a reaction from thoughts
function deleteReaction(req, res) {
  Thoughts.findOneAndUpdate(
    { _id: req.params.thought_id },
    { $pull: { reactions: req.body } },
    { new: true }
  )
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "No user with this id" });
      }
      res.json(user);
    })
    .catch((err) => res.status(500).json(err));
}

module.exports = {
  createThought,
  getThought,
  updateThought,
  getOneThought,
  deleteThought,
  addReaction,
  deleteReaction,
};
