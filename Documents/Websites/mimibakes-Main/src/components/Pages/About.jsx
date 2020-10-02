import React from "react";

import "../../assests/styles/scss/about.scss";
import Container from "../Ctnr";

import Footer from "../Parts/Footer";

const About = () => {
  return (
    <Container>
      <div>
        <div className="about-s" id="about">
          <h2>About Me</h2>
          <hr className="hr-short"></hr>
          <h3>Mimie Hollist - Home Baker</h3>
          <div className="mimie-portrait"></div>
          <div className="about__content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              corporis voluptatibus adipisci amet dicta necessitatibus, sed est
              cupiditate obcaecati impedit aperiam maxime assumenda, repudiandae
              nulla sequi tempore eum quidem laborum accusantium? Ipsa iure
              aliquam architecto sunt ea veritatis reprehenderit expedita.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              corporis voluptatibus adipisci amet dicta necessitatibus, sed est
              cupiditate obcaecati impedit aperiam maxime assumenda, repudiandae
              nulla sequi tempore eum quidem laborum accusantium? Ipsa iure
              aliquam architecto sunt ea veritatis reprehenderit expedita.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default About;
