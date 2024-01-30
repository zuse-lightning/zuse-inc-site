import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AnnouncementBar from "../../components/AnnouncementBar";
import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";

import "./style.css";
import { Sidebar } from "semantic-ui-react";

class App extends Component {

  state = {
    screenWidth: window.innerWidth
  }

  handleResize = (e) => {
    this.setState({ screenWidth: window.innerWidth - 14 });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    const width = JSON.parse(window.localStorage.getItem("screenWidth"));
    this.setState(width);
  }

  componentDidUpdate() {
    window.localStorage.setItem("screenWidth", JSON.stringify(this.state));
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <>
        <AnnouncementBar />
        <Sidebar.Pushable>
          <Sidebar.Pusher>
            <Navbar screenWidth={this.state.screenWidth} />
            <PageBanner />
            <div id="main-container">
              <Routes>
                <Route exact path="/" element={<Home screenWidth={this.state.screenWidth} />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/services/*" element={<Services />} />
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
