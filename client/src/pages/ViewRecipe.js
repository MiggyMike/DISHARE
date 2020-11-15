import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetRecipe } from '../services/RecipeServices'
// import '../styles/PostView.css'
export default class ViewRecipe extends Component {
  constructor() {
    super()
    this.state = {
      recipe: null
    }
  }

  componentDidMount() {
    this.getRecipe()
  }

  getRecipe = async () => {
    try {
      const recipe = await __GetRecipe(this.props.match.params.recipe_id)
      this.setState({ recipe })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { recipe } = this.state
    if (this.state.recipe) {
      return (
        <div className="recipes detail">
          <div className="content-wrapper flex-row">
            <div className="left-content col-1">
              <div className="image-wrapper">
                <img src={recipe.image_url} alt="recipe" />
              </div>
            </div>
            <div className="right-content col-2 flex-col">
              <div className="content-top">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <div className="stats flex-row">
                  <div>
                    <p>Likes</p>
                    <p>{recipe.popularity_rating}</p>
                  </div>
                  <div>
                    <p>Comments</p>
                    <p>{recipe.comments.length}</p>
                  </div>
                </div>
              </div>
              <div className="comments">
                {recipe.comments.length ? (
                  recipe.comments.map((comment) => (
                    <li className="comment-item" key={comment._id}>
                      <p>
                        <Link>{comment.user_id.name}</Link>
                      </p>
                      <p>{comment.comment}</p>
                    </li>
                  ))
                ) : (
                  <h3>No Comments</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
    return  (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    )
  }
}
