import React, { useEffect, useState } from "react";
import { Sidebar } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Catalogs from "../../pages/Catalogs";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Reviews from "../../pages/Reviews";
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

const useCurrentUrl = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  useEffect(() => {
    const handlePageLoad = () => {
      setCurrentUrl(window.location.href);
    }
    window.addEventListener("load", handlePageLoad);
    return window.removeEventListener("load", handlePageLoad);
  }, []);

  return currentUrl;
}

const useWindowDimensions = () => {
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

  const { width } = useWindowDimensions();
  
  return (
    <>
      <Navbar location={useCurrentUrl()} screenWidth={width} />
      <Sidebar.Pushable id="main-pushable">
        <Sidebar.Pusher>
          <PageBanner location={useCurrentUrl()} />
          <div id="main-container">
            <Routes>
              <Route exact path="/" element={<Home location={useCurrentUrl()} screenWidth={width} />} />
              <Route exact path="/about" element={<About location={useCurrentUrl()} />} />
              <Route exact path="/catalogs" element={<Catalogs location={useCurrentUrl()} />} />
              <Route exact path="/services/*" element={<Services location={useCurrentUrl()} screenWidth={width} />} />
              <Route exact path="/contact" element={<Contact location={useCurrentUrl()} />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/reviews" element={<Reviews />} />
            </Routes>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <SocialLinks />
      <Footer location={useCurrentUrl()} />
    </>
  );

}

export default App;