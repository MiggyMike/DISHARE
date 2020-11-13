const { Recipe, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
  try {
    const comment = new Comment({ ...req.body, user_id: req.params.user_id })
    comment.save()
    await Recipe.update(
      { _id: req.params.recipe_id },
      {
        $push: {
          comments: comment
        }
      }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const RemoveComment = async (req, res) => {
  try {
    await Comment.deleteOne({ _id: req.params.comment_id })
    await Recipe.findOneAndUpdate(
      {_id: req.params.recipe_id},
      { $pull: { comments:  req.params.comment_id  } },
      { upsert: true, new: true, useFindAndModify: true },
      (err, updatedRecipe)=>{
        if(err){throw err}
      res.send(updatedRecipe)
      }
      )
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    await Comment.findByIdAndUpdate(
      req.params.comment_id,
      { ...req.body },
      { upsert: true, new: true },
      (err, d) => (err ? err : res.send(d))
    )
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateComment,
  RemoveComment,
  UpdateComment
}
