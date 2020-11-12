const { Recipe, User, Comment } = require("../db/schema");

const GetRecipes = async (req, res) => {
  try {
    const { page, limit } = req.query;
    const offset =
      page === "1" ? 0 : Math.floor(parseInt(page) * parseInt(limit));
    const recipes = await Recipe.find()
      .limit(parseInt(limit))
      .skip(offset)
      .sort({ popularity_rating: "desc" });
    res.send(recipes);
  } catch (error) {
    throw error;
  }
};

const GetRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.recipe_id).populate([
      {
        model: "users",
        path: "user_id",
        select: "_id name",
      },
      {
        path: "comments",
        populate: {
          path: "user_id",
          model: "users",
          select: "_id name",
        },
      },
    ]);
    res.send(recipe);
  } catch (error) {
    throw error;
  }
};

const CreateRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe({ ...req.body, user_id: req.params.user_id });
    newPost.save();
    res.send(newRecipe);
  } catch (error) {
    throw error;
  }
};

const DeleteRecipe = async (req, res) => {
  try {
    await Comment.deleteMany({ _id: { $in: recipe.comments } });
    await Recipe.findByIdAndDelete(req.params.recipe_id);
    res.send({ msg: "Post deleted" });
  } catch (error) {
    throw error;
  }
};

const UpdateRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndUpdate(
      req.params.post_id,
      {
        ...req.body,
      },
      { new: true, useFindAndModify: false },
      (err, (d) => (err ? err : res.send(d)))
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetRecipes,
  GetRecipeById,
  CreateRecipe,
  DeleteRecipe,
  UpdateRecipe,
};
