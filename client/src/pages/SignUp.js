import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __RegisterUser } from "../services/UserServices";
import "../styles/Signup.css";

export default class Signup extends Component {
  // TODO Integrate Auth
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __RegisterUser(this.state);
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, password, email } = this.state;
    return (
      <div className="container signup-page">
        <div className="signup">
          <div className="col s12 l8">
            <div className="card-content">
              <form className="row center" onSubmit={this.handleSubmit}>
                <TextInput
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  type="email"
                  onChange={this.handleChange}
                />
                <TextInput
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <TextInput
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button className="btn-large waves-effect waves-light blue">
                  <i className="material-icons right">keyboard_arrow_right</i>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
