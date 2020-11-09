const { User, Recipe } = require("../db/schema");

const GetProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id.select);
    const recipe = await Recipe.find({ user_id: req.params.user_id });
    res.send(user, recipe);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetProfile,
};
