import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Catalogs from "../../pages/Catalogs";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";

import "./style.css";

class App extends Component {
  render() {

    const location = this.props.history.location.pathname;

    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <div id="main-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About location={location} />} />
            <Route exact path="/catalogs" element={<Catalogs location={location} />} />
            <Route exact path="/services" element={<Services location={location} />} />
            <Route exact path="/contact" element={<Contact location={location} />} />
          </Routes>
        </div>
        <SocialLinks />
        <Footer />
      </>
    );
  }
}

export default App;
