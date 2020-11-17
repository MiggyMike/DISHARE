import React from "react";
import { NavLink } from "react-router-dom";

export default ({ authenticated, currentUser, className }) => {
  return authenticated && currentUser ? (
    <header className={className}>
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
            <NavLink to="/" onClick={() => localStorage.clear()}>
              {console.log("signed out")}
              Sign Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  ) : (
    <header className={className}>
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
    </header>
  );
};
