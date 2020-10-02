import React from "react";
import { Link } from "react-router-dom";
import "../../assests/styles/scss/pricing.scss";
import Container from "../Ctnr";
import Footer from "../Parts/Footer";

const Pricing = (props) => {
  return (
    <Container>
      <div>
        <div className="pricing" id="pricing">
          <h2>Pricing</h2>
          <hr className="hr-short"></hr>
          <h3>Cake Menu</h3>
          <div className="gridContainer">
            <div className="gridItem">
              <span>
                <Link to="/contact">Celebration Cakes</Link>
              </span>{" "}
            </div>
            <div className="gridItem">
              <span>
                <Link to="/contact">Wedding Cakes</Link>
              </span>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            architecto, assumenda velit sint porro corporis praesentium
            inventore aliquam iure officiis.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis</p>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Pricing;
