const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reactions");

// Create model from requirements
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (date) => {
        if (date) return date.toISOString().split("T") [0];
      },
    },
    username: [
      {
        type: String,
        required: true
      },
    ],
    reactions: [
      reactionSchema
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Thoughts = model("Thought", thoughtsSchema);

module.exports = Thoughts;
