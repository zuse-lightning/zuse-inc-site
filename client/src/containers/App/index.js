import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Catalogs from "../../pages/Catalogs";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";

import "./style.css";

class App extends Component {
  render() {
    return (
      <>
        <Grid id="main-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/catalogs" element={<Catalogs />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Grid>
      </>
    );
  }
}

export default App;
