const Router = require('express').Router()
const RecipeController = require('../controllers/RecipeController')

Router.get('/', RecipeController.GetRecipes)
Router.get('/:recipe_id', RecipeController.GetRecipeById)
Router.post('/:user_id', RecipeController.CreateRecipe)
Router.put('/:recipe_id', RecipeController.UpdateRecipe)
Router.delete('/:recipe_id', RecipeController.DeleteRecipe)

module.exports = Router
