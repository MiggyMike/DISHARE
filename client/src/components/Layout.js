import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default (props) => (
  <div>
    <Nav
      {...props}
      authenticated={props.authenticated}
      currentUser={props.currentUser}
      className="header-elevated"
      toggleAuthenticated={props.toggleAuthenticated}
    />
    <div className="main-space">{props.children}</div>

    <Footer />
  </div>
);
