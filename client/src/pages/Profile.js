import React, { Component } from "react";
import { Link } from "react-router-dom";
import { __DeleteRecipe } from "../services/RecipeServices";
import { __GetProfile } from "../services/UserServices";

export default class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      recipeFetchError: false,
      recipes: [],
      currentUser: props.currentUser.name,
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = async () => {
    try {
      console.log(this.props);
      const profileData = await __GetProfile(this.props.currentUser._id);
      this.setState({ recipes: profileData.recipes });
    } catch (error) {
      this.setState({ recipeFetchError: true });
    }
  };

  deleteRecipe = async (id) => {
    try {
      const recipesToKeep = this.state.recipes.filter(
        (recipe) => recipe._id !== id
      );
      this.setState({ recipes: recipesToKeep });
      await __DeleteRecipe(id);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="profile container">
        <div className="user-content"></div>
        <h4 className="icon">Welcome back {this.state.currentUser}</h4>
        <div className="row">
          {this.state.recipes.length ? (
            <div className="">
              {this.state.recipes.map((recipe) => (
                <div key={recipe._id} className="">
                  <div className="">
                    <div className=" col s12 m6 l4">
                      <div className="card hoverable">
                        <div className="card-image waves-effect waves-block waves-light">
                          <img
                            className="activator"
                            src={recipe.image_url}
                            alt="current of food"
                          />
                        </div>
                        <div className="card-content">
                          <span className="card-title activator grey-text text-darken-4">
                            {recipe.title}
                            <i className="material-icons right">more_vert</i>
                          </span>
                          <p>
                            <Link
                              to="#"
                              onClick={() =>
                                this.props.history.push(`/recipe/${recipe._id}`)
                              }
                            >
                              View Post
                            </Link>
                          </p>
                        </div>
                        <div className="card-reveal">
                          <div className="card-title grey-text text-darken-4">
                            <i className="material-icons right">close</i>
                            <span>{recipe.title}</span>
                          </div>
                          <div className="row">
                            <button
                              className="btn blue col s12"
                              onClick={() =>
                                this.props.history.push(`/edit/${recipe._id}`)
                              }
                            >
                              Edit
                            </button>
                            <button
                              className="btn red  col s12"
                              onClick={() => this.deleteRecipe(recipe._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No Posts</div>
          )}
        </div>
      </div>
    );
  }
}
