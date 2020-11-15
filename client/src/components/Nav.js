import React from 'react'
import { Link } from 'react-router-dom'

export default({ authenticated, currentUser, className }) => {
  return authenticated && currentUser ? (
    <header className={className}>
    <nav className="nav-wrapper">
      <Link to="/" className="brand-logo center">di/SH/are</Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/recipes"> Recipes </Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/upload">Post Recipe</Link></li>
        <li><Link activeClassName="nav-active"
          to="/"
         >Sign Out</Link></li>
      </ul>
    </nav>
    </header>
  ) : (
    <header className={className}>
    <nav className="nav-wrapper">
      <Link to="/" className="brand-logo center">di/SH/are</Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/reicpes">Recipes</Link></li>
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    </nav>
    </header>
  )
}
