import React from "react";
import "../styles/Nav.css";

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
            <h5 className="white-text">Personal Favs</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://carnaldish.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Carnal Dish
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="http://www.stovetopkisses.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stove Top Kisses
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://fitmencook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FitMenCook
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.mrbakesweets.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mr.BAKE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2020 Copyright Michael Jennings
          <a
            className="grey-text text-lighten-4 right"
            href="http://you-tried-it.surge.sh/"
          >
            YouTriedIt
          </a>
        </div>
      </div>
    </footer>
  );
};
