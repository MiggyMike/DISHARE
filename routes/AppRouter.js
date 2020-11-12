const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const RecipeRouter = require('./RecipeRouter')

Router.use('/users', UserRouter)
Router.use('/recipes', RecipeRouter)
Router.use('/comments', CommentRouter)

module.exports = Router
