import React from "react";
import { NavLink } from "react-router-dom";

export default (props) => {
  return (
    <header>
      {props.authenticated && props.currentUser ? (
        <nav className="nav-wrapper">
          <NavLink to="/" className="brand-logo center">
            di/SH/are
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-small-and-down">
            <li>
              <NavLink to="/recipes"> Recipes </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Post Recipe</NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                onClick={() =>
                  props.toggleAuthenticated(false, null, () =>
                    props.history.push("/")
                  )
                }
              >
                Sign Out
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="nav-wrapper">
          <NavLink to="/" className="brand-logo center">
            di/SH/are
          </NavLink>
          <ul id="nav-mobile" className="left hide-on-small-and-down">
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/login">Sign In</NavLink>
            </li>
            <li>
              <NavLink to="/register">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
