import React, { Component } from "react";
import { __GetRecipe, __UpdateRecipe } from "../services/RecipeServices";

export default class UpdateRecipe extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      summary: "",
      prepTime: "",
      cookTime: "",
      totalTime: "",
      servings: "",
      image_url: "",
      ingredients: "",
      instructions: "",
      category: "",
    };
  }

  componentDidMount() {
    this.getRecipe();
  }

  getRecipe = async () => {
    try {
      const recipe = await __GetRecipe(this.props.match.params.recipe_id);
      this.setState({
        title: recipe.title,
        summary: recipe.summary,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
        totalTime: recipe.totalTime,
        servings: recipe.servings,
        image_url: recipe.image_url,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        category: recipe.category,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UpdateRecipe(this.state, this.props.match.params.recipe_id);
      this.props.history.push("/profile/:user_id");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      title,
      summary,
      servings,
      prepTime,
      cookTime,
      totalTime,
      image_url,
      ingredients,
      instructions,
      category,
    } = this.state;
    return (
      <div className="container row">
        <form className="col s12" action="#" onSubmit={this.handleSubmit}>
          <div className="">
            <div className="input-field col s12">
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <span className="helper-text">Title</span>
            </div>
            <div className="input-field col s12">
              <input
                type="text"
                name="summary"
                value={summary}
                onChange={this.handleChange}
              />
              <span className="helper-text">Summary</span>
            </div>
            <div className="row">
              <div className="input-field col s3">
                <input
                  type="text"
                  name="prepTime"
                  value={prepTime}
                  onChange={this.handleChange}
                />
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
                >
                  Prep Time
                </span>
              </div>
              <div className="input-field col s3">
                <input
                  type="text"
                  name="cookTime"
                  value={cookTime}
                  onChange={this.handleChange}
                />
                <span className="helper-text">Cook Time</span>
              </div>
              <div className="input-field col s3">
                <input
                  type="text"
                  name="totalTime"
                  value={totalTime}
                  onChange={this.handleChange}
                />
                <span className="helper-text">Total Time</span>
              </div>
              <div className="input-field col s3">
                <input
                  type="text"
                  name="servings"
                  value={servings}
                  onChange={this.handleChange}
                />
                <span className="helper-text">Servings</span>
              </div>
              <div className="input-field col s12">
                <input
                  name="image_url"
                  value={image_url}
                  onChange={this.handleChange}
                  type="text"
                />
                <span className="helper-text">Image URL</span>
              </div>
              <div className="input-field col s12">
                <textarea
                  name="ingredients"
                  value={ingredients}
                  onChange={this.handleChange}
                  type="text"
                  className="materialize-textarea"
                ></textarea>
                <span className="helper-text">Ingredients</span>
              </div>
              <div className="input-field col s12">
                <textarea
                  name="instructions"
                  value={instructions}
                  onChange={this.handleChange}
                  type="text"
                  className="materialize-textarea"
                ></textarea>
                <span className="helper-text">Instructions</span>
              </div>
              <div className="input-field col s12">
                <input
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                  type="text"
                />
                <span className="helper-text">
                  Breafast, Brunch, Lunch, Snack, Dinner, etc.
                </span>
              </div>
            </div>
          </div>
          <div className="button-wrapper center-align">
            <button className="btn waves-effect waves-light ">Update</button>
          </div>
        </form>
      </div>
    );
  }
}
