import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __UploadRecipe } from "../services/RecipeServices";

export default class CreateRecipe extends Component {
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UploadRecipe(this.state, this.props.currentUser._id);
      this.props.history.push("/profile");
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
      <div className=" container row">
        <form className="col s12" action="#" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <label>Title</label>
          </div>
          <div className="input-field col s12">
            <input
              type="text"
              name="summary"
              value={summary}
              onChange={this.handleChange}
            />
            <label>Summary</label>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <input
                type="text"
                name="prepTime"
                value={prepTime}
                onChange={this.handleChange}
              />
              <label>Prep Time</label>
            </div>
            <div className="input-field col s3">
              <input
                type="text"
                name="cookTime"
                value={cookTime}
                onChange={this.handleChange}
              />
              <label>Cook Time</label>
            </div>
            <div className="input-field col s3">
              <input
                type="text"
                name="totalTime"
                value={totalTime}
                onChange={this.handleChange}
              />
              <label>Total Time</label>
            </div>
            <div className="input-field col s3">
              <input
                type="text"
                name="servings"
                value={servings}
                onChange={this.handleChange}
              />
              <label>Servings</label>
            </div>
            <div className="input-field col s12">
              <input
                name="image_url"
                value={image_url}
                onChange={this.handleChange}
                type="text"
              />
              <label>Image URL</label>
            </div>
            <div className="input-field col s12">
              <textarea 
                name="ingredients"
                value={ingredients}
                onChange={this.handleChange}
                type="text"
                className="materialize-textarea">
                </textarea>
                <label 
                for="textarea1">
                  Ingredients
                  </label>
            </div>
            <div className="input-field col s12">
              <textarea 
                name="instructions"
                value={instructions}
                onChange={this.handleChange}
                type="text"
                className="materialize-textarea">
                </textarea>
                <label 
                for="textarea1">
                  Instructions
                  </label>
            </div>
            <div className="input-field col s12">
              <input
                name="category"
                value={category}
                onChange={this.handleChange}
                type="text"
              />
              <label>Breakfast, Lunch, Dinner, Dessert, Snack, etc.</label>
            </div>
          </div>
          <button>Upload</button>
        </form>
      </div>
    );
  }
}
