import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __LoginUser } from "../services/UserServices";
import "../styles/SignIn.css";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      formError: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, formError: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = await __LoginUser(this.state);
      // console.log(loginData)
      this.props.toggleAuthenticated(true, loginData.user, () =>
        this.props.history.push("/profile")
      );
    } catch (error) {
      this.setState({ formError: true });
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 l8">
            <div className="card ">
              <div className="card-content">
                <div>
                  <form className="flex-col" onSubmit={this.handleSubmit}>
                    <TextInput
                      placeholder="Your Email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <TextInput
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <button className="btn waves-effect waves-light blue">
                      <i className="material-icons right">
                        keyboard_arrow_right
                      </i>
                      Sign In
                    </button>
                    {this.state.formError ? (
                      <p>Error While Logging In</p>
                    ) : (
                      <p></p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
