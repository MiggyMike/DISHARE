import React, { Component } from 'react'
import Card from '../components/Card'
import { __DeleteRecipe } from '../services/RecipeServices'
import { __GetProfile } from '../services/UserServices'

export default class Profile extends Component {
  constructor() {
    super()
    this.state = {
      recipeFetchError: false,
      recipes: []
    }
  }

  componentDidMount() {
    this.getRecipes()
  }

  getRecipes = async () => {
    try {
      console.log(this.props)
      const profileData = await __GetProfile(this.props.currentUser._id)
      this.setState({ recipes: profileData.recipes })
    } catch (error) {
      this.setState({ recipeFetchError: true })
    }
  }

  deleteRecipe = async (id) => {
    try {
      const recipesToKeep = this.state.recipes.filter((recipe) => recipe._id !== id)
      this.setState({ recipes: recipesToKeep })
      await __DeleteRecipe(id)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="profile">
        <div>
          {this.state.recipes.length ? (
            <div className="recipe-content wrapper flex-row">
              {this.state.recipes.map((recipe) => (
                <div key={recipe._id}>
                  <Card
                    onClick={() =>
                      this.props.history.push(`/recipe/${recipe._id}`)
                    }
                  >
                    <div className="mask flex-col">
                      <div className="card-content">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                      </div>
                    </div>
                    <img src={recipe.image_url} alt="current of food" />
                  </Card>
                  <div className="flex-row button-wrapper">
                    <button
                      onClick={() =>
                        this.props.history.push(`/edit/${recipe._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => this.deleteRecipe(recipe._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="span message">No Posts</div>
          )}
        </div>
      </div>
    )
  }
}
