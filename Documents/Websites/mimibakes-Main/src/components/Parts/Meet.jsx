import React from "react";
import { Link } from "react-router-dom";

import "./meet.scss";
const Meet = () => {
  return (
    <section className="meet">
      <div className="meet__item about-m">
        <Link to="/about">
          <span>Meet Mimie</span>
        </Link>
      </div>
      <div className="meet__item contact-m">
        <Link to="/contact">
          <span>Contact Me</span>
        </Link>
      </div>
    </section>
  );
};

export default Meet;
