const { Schema } = require("mongoose");

module.exports = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    popularity_rating: {
      type: Number,
      default: 0,
      required: true
    },
    summary: {
      prepTime: {
        type: String,
        required: true,
      },
      cookTime: {
        type: String,
        required: true,
      },
      totalTime: {
        type: String,
        required: true,
      },
      servings: {
        type: String,
        required: true,
      },
    },
    ingreditents: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments',
      },
    ],
    user: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  { timestapms: true }
);
