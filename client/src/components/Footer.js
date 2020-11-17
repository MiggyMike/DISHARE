import React from "react";
import { NavLink } from "react-router-dom";

export default (props) => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">DI/SH/ARE</h5>
            <p className="grey-text text-lighten-4">
              Don't like what you see here, check my go to sites for
              inspirations
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">More</h5>
            <ul>
              <li>
                <NavLink
                  className="grey-text text-lighten-3"
                  to="https://carnaldish.com/"
                >
                  Carnal Dish
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="grey-text text-lighten-3"
                  to="http://www.stovetopkisses.com/"
                >
                  Stove Top Kisses
                </NavLink>
              </li>
              <li>
                <NavLink
                  class="grey-text text-lighten-3"
                  to="https://fitmencook.com/"
                >
                  FitMenCook
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="grey-text text-lighten-3"
                  to="https://www.mrbakesweets.com/"
                >
                  Mr.BAKE
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright Michael Jennings
          <NavLink
            className="grey-text text-lighten-4 right"
            to="http://you-tried-it.surge.sh/"
          >
            YouTriedIt
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
