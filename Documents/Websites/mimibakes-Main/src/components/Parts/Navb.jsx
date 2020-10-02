import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.scss";
import { Link, withRouter } from "react-router-dom";

function Navb() {
  return (
    <section>
      <div>
        <Navbar
          className="menu-toggle"
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          fixed="top"
        >
          <Navbar.Brand href="#home">Mimie Bakes.</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav justify-content-right">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <hr></hr>
    </section>
  );
}

export default withRouter(Navb);
