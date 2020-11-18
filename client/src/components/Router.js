import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "./Layout";

import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Recipes from "../pages/Recipes";
import LandingPage from "../pages/LandingPage";
import Profile from "../pages/Profile";

import CreateRecipe from "../pages/CreateRecipe";
import ViewRecipe from "../pages/ViewRecipe";
import UpdateRecipe from "../pages/UpdateRecipe";

import { __CheckSession } from "../services/UserServices";
import ProtectedRoute from "./ProtectedRoute";

import "../styles/global.css";

class Router extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true,
    };
  }

  componentDidMount() {
    //invoke verifyTokenValid request
    this.verifyTokenValid();
    this.setState({ pageLoading: false });
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log("session", session);
        this.setState(
          {
            currentUser: session.user,
            authenticated: true,
          },
          () => this.props.history.push(window.location.pathname)
        );
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false });
        localStorage.clear();
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  };

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done());
  };

  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Layout
            {...this.props}
            currentUser={this.state.currentUser}
            authenticated={this.state.authenticated}
            toggleAuthenticated={this.toggleAuthenticated}
          >
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => (
                  <LandingPage>
                    <Home {...props} />
                  </LandingPage>
                )}
              />
              <Route
                path="/register"
                component={(props) => (
                  <LandingPage>
                    <SignUp {...props} />
                  </LandingPage>
                )}
              />
              <Route
                path="/login"
                component={(props) => (
                  <LandingPage>
                    <SignIn
                      toggleAuthenticated={this.toggleAuthenticated}
                      {...props}
                    />
                  </LandingPage>
                )}
              />
              <Route
                path="/recipes"
                component={(props) => <Recipes {...props} />}
              />
              <Route
                path="/recipe/:recipe_id"
                component={(props) => (
                  <ViewRecipe {...props} currentUser={this.state.currentUser} />
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/profile"
                component={(props) => (
                  <Profile {...props} currentUser={this.state.currentUser} />
                )}
              />

              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/upload"
                component={(props) => (
                  <CreateRecipe
                    {...props}
                    currentUser={this.state.currentUser}
                  />
                )}
              />
              <ProtectedRoute
                authenticated={this.state.authenticated}
                path="/edit/:recipe_id"
                component={(props) => (
                  <UpdateRecipe
                    {...props}
                    currentUser={this.state.currentUser}
                  />
                )}
              />
            </Switch>
          </Layout>
        )}
      </main>
    );
  }
}

export default withRouter(Router);
