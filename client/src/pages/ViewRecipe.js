import React, { Component } from "react";
import { Link } from "react-router-dom";
import { __GetRecipe } from "../services/RecipeServices";
import CreateComment from "../components/CreateComment";
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
      const foundRecipe = await __GetRecipe(this.props.match.params.recipe_id);
      this.setState({ recipe: foundRecipe });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { recipe } = this.state;
    if (this.state.recipe) {
      return (
        <div className="container recipes row">
          <div>
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
                </div>
              </div>
            </div>

            <div className="card-panel">
              <CreateComment
                {...this.props}
                currentUser={this.props.currentUser}
                recipeId={this.state.recipe._id}
              />
            </div>
            <div className="card comments-card">
              <div className="stats row">
                <div className="col">
                  <p>Comments: {recipe.comments.length}</p>
                </div>
              </div>
              <h3>Comments</h3>
              {recipe.comments.length ? (
                recipe.comments.map((comment, index) => (
                  <div className="comment-item" key={index}>
                    <p>
                      <Link to="">{comment.user_id.name}</Link>
                    </p>
                    <p>{comment.comment}</p>
                  </div>
                ))
              ) : (
                <h5>No Comments</h5>
              )}
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
