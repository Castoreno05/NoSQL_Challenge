const { User } = require("../models");

// GET function to return all users
function getUsers(req, res) {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
}

// POST function to create users
function createUser(req, res) {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
}

// PUT function to update users
function updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.user_id },
    { $set: req.body },
    { runValidators: true, new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: "No user with this id!" })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
}

// Exporting functions out
module.exports = { createUser, getUsers, updateUser };
