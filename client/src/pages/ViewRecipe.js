import React, { Component } from "react";
import { Link } from "react-router-dom";
import { __GetRecipe } from "../services/RecipeServices";
export default class ViewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = async () => {
    try {
      const recipe = await __GetRecipe(this.props.match.params.recipe_id);
      this.setState({ recipe });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { recipe } = this.state;
    if (this.state.recipe) {
      return (
        <div className="container recipes row">
          <div className="content-wrapper card-panel grey lighten-5 z-depth-1 ">
            <div className="header-content col s12">
              <h2>{recipe.title}</h2>
              <div className="img-sum-wrapper row">
                <div className="image-wrapper col s6">
                  <img
                    className="responsive-img"
                    src={recipe.image_url}
                    alt="recipe"
                  />
                </div>
                <div className="right-content col s6 ">
                  <p className="recipe-summary">{recipe.summary}</p>
                  <p>Prep Time: {recipe.prepTime}</p>
                  <p>Cook Time: {recipe.cookTime}</p>
                  <p>Total Time: {recipe.totalTime}</p>
                  <p>Servings: {recipe.servings}</p>
                </div>
              </div>
            </div>
            <div className="main-content col-2 flex-col">
              <div className="content-top">
                <h5>Ingredients</h5>
                <p>{recipe.ingredients}</p>
                <h5>Instructions</h5>
                <p>{recipe.instructions}</p>
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
      );
    }
    return (
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    );
  }
}
