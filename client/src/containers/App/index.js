import React, { Component } from "react";
import { Sidebar } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";

import "./style.css";
import TopCatalogs from "../../components/TopCatalogs";

class App extends Component {

  state = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight
  }

  handleResize = (e) => {
    this.setState({ screenWidth: window.innerWidth });
    this.setState({ screenHeight: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    const width = JSON.parse(window.localStorage.getItem("screenWidth"));
    const height = JSON.parse(window.localStorage.getItem("screenHeight"));
    this.setState(width);
    this.setState(height);
    console.log(this.state.screenWidth, this.state.screenHeight);
  }

  componentDidUpdate() {
    window.localStorage.setItem("screenWidth", JSON.stringify(this.state));
    window.localStorage.setItem("screenHeight", JSON.stringify(this.state));
    console.log(this.state.screenWidth, this.state.screenHeight);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <>
        <Navbar screenWidth={this.state.screenWidth} screenHeight={this.state.screenHeight} />
        <Sidebar.Pushable id="main-pushable">
          <Sidebar.Pusher>
            <PageBanner />
            <div id="main-container">
              <Routes>
                <Route exact path="/" element={<Home screenWidth={this.state.screenWidth} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/catalogs" element={<TopCatalogs />} />
                <Route exact path="/services/*" element={<Services screenWidth={this.state.screenWidth} />} />
                <Route exact path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <SocialLinks />
        <Footer />
      </>
    );
  }
}

export default App;
