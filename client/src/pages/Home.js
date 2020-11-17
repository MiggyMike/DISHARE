import React from "react";
import "../styles/Home.css";
import SignUp from "../pages/SignUp";

export default (props) => {
  return (
    <div>
      <div className="row center container home-greet">
        <div className="col s12">
          <h1>Welcome to DI/sh/ARE</h1>
        </div>
      </div>

      <div className="divider"></div>

      <div className="row container section home-section-one">
        <div className="col s4">
          <h4 className="center">Cook</h4>
          <img
            // style={{
            //   height: "35vh",
            //   width: "100%",
            // }}
            className="responsive-img"
            src="https://pinchofyum.com/wp-content/uploads/Crockpot-Ragu-for-Skinnytaste-5.jpg"
            alt=""
          />
          <p>
            Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
            radish okra azuki bean corn fava bean mustard tigernut jï¿½cama
            green bean celtuce collard greens avocado quandong fennel gumbo
            black-eyed pea. Grape silver beet watercress potato tigernut corn
            groundnut.
          </p>
        </div>
        <div className=" col s4 ">
          <h4 className="center">Share</h4>
          <img
            // style={{
            //   height: "35vh",
            //   width: "100%",
            // }}
            className="responsive-img"
            src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <p>
            Prosciutto rump doner, pork chop kevin shank kielbasa beef drumstick
            andouille salami. Porchetta chicken jerky venison ham short loin
            bacon. Short ribs rump ham hock fatback short loin boudin biltong
            filet mignon turkey porchetta ball tip cupim shank ground round.
            Pastrami shoulder chislic hamburger, cow ground round flank sirloin
            leberkas venison bacon.
          </p>
        </div>
        <div className="col s4 ">
          <h4 className="center">Eat</h4>
          <img
            // style={{
            //   height: "309px",
            //   width: "100%",
            // }}
            className="responsive-img"
            src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <p>
            Fruitcake cake apple pie dragée topping cake caramels. Tootsie roll
            chocolate bar gummies oat cake jujubes pastry jelly-o topping.
            Tootsie roll chocolate jelly beans halvah I love. Halvah I love cake
            I love croissant muffin candy canes chocolate tootsie roll.
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="home-section-two valign-wrapper">
        <div className="row center section ">
          <div className=" col s12">
            <SignUp className="col s12" />
          </div>
        </div>
      </div>
    </div>

    // <div className="row">
    //   <div
    //     className="col s2"
    //     style={{
    //       backgroundImage: `url('https://www.forksoverknives.com/wp-content/uploads/plantbased-diet.jpg')`,
    //       minHeight: "100vh",
    //       width: "50vw",
    //       backgroundSize: "cover",
    //       paddingTop: "3vh",
    //     }}
    //   >
    //     <h2>Test</h2>
    //   </div>
    //   <div
    //     className="col s10"
    //     style={{
    //       backgroundColor: "white",
    //       minHeight: "100vh",
    //       width: "50vw",
    //       backgroundSize: "cover",
    //       paddingTop: "3vh",
    //     }}
    //   >
    //     <h1>Block</h1>
    //     <SignIn />
    //     <SignUp />
    //   </div>
    // </div>
  );
};
