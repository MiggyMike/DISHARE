import React, { Component } from "react";
import { __GetRecipes } from "../services/RecipeServices";
// import "../styles/Discover.css";

export default class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = async () => {
    try {
      const recipes = await __GetRecipes(this.state.currentPage);
      this.setState({ recipes: [...this.state.recipes, ...recipes] });
    } catch (err) {
      console.log(err);
    }
  };

  incrementPage = () =>
    this.setState(
      (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
      () => this.getRecipes()
    );
  render() {
    const { recipes } = this.state;
    return (
      <div className=" container recipe wrapper">
        <h2>Popular Recipes</h2>
        <section className="">
          {recipes.length ? (
            recipes.map((recipe) => (
              <div
                className="card"
                key={recipe._id}
                onClick={() => this.props.history.push(`/recipe/${recipe._id}`)}
              >
                <div className="card-stacked">
                  <div className="card-content">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.summary.substring(0, 50)}...</p>
                  </div>
                  <img
                    className="responsive-img card-image"
                    src={recipe.image_url}
                    alt="sf"
                  />
                  <div className="card-content-top row">
                    <div className="stats col s6">
                      <p>Comments</p>
                      <p>{recipe.comments.length}</p>
                    </div>
                    <div className="stats col s6">
                      <p>Likes</p>
                      <p>{recipe.popularity_rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>No Recipes</h3>
          )}
          <button onClick={this.incrementPage}>Load More</button>
        </section>
      </div>
    );
  }
}
