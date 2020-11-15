import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetRecipe, __UpdateRecipe } from '../services/RecipeServices'
export default class UpdateRecipe extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      summary: '',
      image_url: '',
      ingredients: '', 
      instructions : ''
    }
  }

  componentDidMount() {
    this.getRecipe()
  }
  getRecipe = async () => {
    try {
      const recipe = await __GetRecipe(this.props.match.params.recipe_id)
      this.setState({
        title: recipe.title,
        summary: recipe.summary,
        image_url: recipe.image_url,
        ingredients: recipe.ingredients, 
        instructions : recipe.instructions
      })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UpdateRecipe(this.state, this.props.match.params.recipe_id)
      this.props.history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title, location, image_url, ingredients, instructions } = this.state
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="Location"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
             <TextInput
            placeholder="Image Url"
            name="image_url"
            value={image_url}
            onChange={this.handleChange}
          />
           <TextInput
            fieldType="textfield"
            name="instructions"
            placeholder="Instructions"
            value={instructions}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            name="ingredients"
            placeholder="Ingredients"
            value={ingredients}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    )
  }
}
