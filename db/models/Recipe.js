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
        required: false,
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
      step8: {
        type: String,
        required: false,
      },
      step9: {
        type: String,
        required: false,
      },
      step10: {
        type: String,
        required: false,
      },
      step11: {
        type: String,
        required: false,
      },
      step12: {
        type: String,
        required: false,
      },
      step13: {
        type: String,
        required: false,
      },
      step14: {
        type: String,
        required: false,
      },
      step15: {
        type: String,
        required: false,
      },
      step16: {
        type: String,
        required: false,
      },
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
