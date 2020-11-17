import React, { Component } from "react";
import { __UploadComment } from "../services/CommentServices";

export default class CreateComment extends Component {
  constructor() {
    super();
    this.state = {
      comment: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UploadComment(
        this.state.comment,
        this.props.recipeId,
        this.props.currentUser._id
      );
      this.props.history.push("/recipes");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.props.currentUser);
    const { comment } = this.state;
    return (
      <div className="row">
        <form className="col s12" action="#" onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <textarea
              name="comment"
              value={comment}
              onChange={this.handleChange}
              type="text"
              className="materialize-textarea"
            ></textarea>
            <label>Comment</label>
          </div>
          <button className="btn-small blue right">SUBMIT</button>
        </form>
      </div>
    );
  }
}
