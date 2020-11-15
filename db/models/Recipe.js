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
    image_url: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: false
    },
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
    ingredients: {
        type: Array,
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
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'comments',
      },
    ]
    },
  { timestapms: true }
);
