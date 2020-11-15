const { model } = require("mongoose");
const CommentModel = require("./models/Comments");
const RecipeModel = require("./models/Recipe");
const UserModel = require("./models/User");
// Importing schemas to export them in one file

const Comment = model("comments", CommentModel);
const Recipe = model("recipies", RecipeModel);
const User = model("users", UserModel);

module.exports = {
  Comment,
  Recipe,
  User,
};
