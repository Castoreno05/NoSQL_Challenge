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

// GET a single user
function getOneUser(req, res) {
  User.findOne({ _id: req.params.user_id })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "No user with this id" });
      }
      res.json(user);
    })
    .catch((err) => res.status(500).json(err));
}

// DELETE a user
function deleteUser(req, res) {
  User.findOneAndDelete({ _id: req.params.user_id })
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
}

// ----------------------------------------------------------------------------------------------------------------------
// POST a friend to a user
function addFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.user_id },
    { $addToSet: { friends: req.params.friends_id } },
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

// DELETE a friend from a user
function deleteFriend(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.user_id },
    { $pull: { friends: req.params.friends_id } },
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

// Exporting functions out
module.exports = {
  createUser,
  getUsers,
  updateUser,
  getOneUser,
  deleteUser,
  addFriend,
  deleteFriend,
};
