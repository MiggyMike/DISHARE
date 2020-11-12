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
    ingredients: {
      ing1: {
        type: String,
        required: false,
      },
      ing2: {
        type: String,
        required: false,
      },
      ing3: {
        type: String,
        required: false,
      },
   
      ing4: {
        type: String,
        required: false,
      },
   
      ing5: {
        type: String,
        required: false,
      },
   
      ing6: {
        type: String,
        required: false,
      },
    },
    instructions: {
      step1: {
        type: String,
        required: false,
      },
      step2: {
        type: String,
        required: false,
      },
      step3: {
        type: String,
        required: false,
      },
      step4: {
        type: String,
        required: false,
      },
      step5: {
        type: String,
        required: false,
      },
      step6: {
        type: String,
        required: false,
      },
      step7: {
        type: String,
        required: false,
      },
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
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  { timestapms: true }
);
