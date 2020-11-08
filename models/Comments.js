const { Schema } = required("mongoose");

module.exports = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: rating,
      ratingValue: 5,
      lowRating: 1,
      highRating: 5,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamp: true }
);
