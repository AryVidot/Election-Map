import React from "react";
import { Link } from "react-router-dom";

import "./hero.scss";
const Hero = () => {
  return (
    <section className="wrapper">
      <div className="item item1"></div>
      <div className="item item2">
        {" "}
        <h2>
          Bespoke Cakes <br></br>For <br></br>All Occasions
        </h2>{" "}
        <Link to="/pricing">
          <span>Order Here</span>
        </Link>
      </div>
      <div className="item item3"></div>
    </section>
  );
};

export default Hero;
