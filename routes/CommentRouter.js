const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post(
  '/:recipe_id/user/:user_id', CommentController.CreateComment
)
Router.delete(
  '/:recipe_id/remove/:comment_id', CommentController.RemoveComment
)
Router.put(
  '/:comment_id', CommentController.UpdateComment
)

module.exports = Router
