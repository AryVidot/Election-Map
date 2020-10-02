import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navb from "./components/Parts/Navb";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Pricing from "./components/Pages/Pricing";
import Contact from "./components/Pages/Contact";
import Container from "./components/Ctnr";

function App() {
  return (
    <Router>
      <Container>
        <Navb />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />

        {/* <Main /> */}
      </Container>
    </Router>
  );
}

export default App;
