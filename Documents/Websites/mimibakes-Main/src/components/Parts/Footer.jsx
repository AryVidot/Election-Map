import React from "react";
import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="page-footer font-small white ">
      <hr></hr>
      <h2>Follow Me </h2>
      <IconContext.Provider
        value={{ color: "rgb(255, 221, 210)", size: "2em" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-2">
              <div className="mb-2 flex-center">
                <a
                  className="fb-ic si-c"
                  href="https://www.facebook.com/mimiehollist"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>

                <a
                  className="ins-ic si-c"
                  href="https://www.instagram.com/mimiehollist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  className="pin-ic si-c"
                  href="https://www.pinterest.co.uk/mimiehollist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright .bg-light text-center py-2">
          © 2020 Copyright:
          <Link to="/Home"> MimieBakes.com</Link>
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
