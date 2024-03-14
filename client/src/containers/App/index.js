import React, { useEffect, useState } from "react";
import { Sidebar } from "semantic-ui-react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import Home from "../../pages/Home";
import About from "../../pages/About";
import TopCatalogs from "../../components/TopCatalogs";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";

import "./style.css";

const getWindowDimensions = () => {
  const page = document.querySelector("html");
  const { clientWidth: width, clientHeight: height } = page;
  return {
    width,
    height
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const App = () => {

  let location = useLocation();
  console.log(location);
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Navbar location={location} screenWidth={width} />
      <Sidebar.Pushable id="main-pushable">
        <Sidebar.Pusher>
          <PageBanner />
          <div id="main-container">
            <Routes>
              <Route exact path="/" element={<Home location={location} screenWidth={width} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/catalogs" element={<TopCatalogs />} />
              <Route exact path="/services/*" element={<Services screenWidth={width} />} />
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

export default App;
