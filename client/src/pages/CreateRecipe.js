import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadRecipe } from '../services/RecipeServices'

export default class CreateRecipe extends Component {
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

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UploadRecipe(this.state, this.props.currentUser._id)
      this.props.history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { title, summary, image_url, ingredients, instructions } = this.state
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
            placeholder="Summary"
            name="summary"
            value={summary}
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
          <button>Upload</button>
        </form>
      </div>
    )
  }
}
