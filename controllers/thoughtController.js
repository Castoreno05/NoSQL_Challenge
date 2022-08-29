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

// function deleteThought() {}

module.exports = { createThought, getThought, updateThought };
