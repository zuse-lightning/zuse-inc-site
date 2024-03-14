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

const useCurrentUrl = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

  console.log(currentUrl);

  useEffect(() => {
    const handlePageLoad = () => {
      setCurrentUrl(window.location.href);
    }
    window.addEventListener("load", handlePageLoad);
    return window.removeEventListener("load", handlePageLoad);
  }, []);

  console.log(currentUrl);
  return currentUrl;
}

const ChangeFavicon = (url) => {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    const zuseIcon = "%PUBLIC_URL%/temp-favicon.png";
    const acpIcon = "%PUBLIC_URL%/ACP-favicon.png";
    if (!link) {
      link = document.createElement("link");
      link.rel = 'icon';
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    url.includes("www.thecustomtfactory.com") ? link.href = acpIcon : link.href = zuseIcon;
  }, [])
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

  const { height, width } = useWindowDimensions();
  ChangeFavicon(useCurrentUrl());

  return (
    <>
      <Navbar location={useCurrentUrl()} screenWidth={width} />
      <Sidebar.Pushable id="main-pushable">
        <Sidebar.Pusher>
          <PageBanner location={useCurrentUrl()} />
          <div id="main-container">
            <Routes>
              <Route exact path="/" element={<Home screenWidth={width} />} />
              <Route exact path="/about" element={<About location={useCurrentUrl()} />} />
              <Route exact path="/catalogs" element={<TopCatalogs />} />
              <Route exact path="/services/*" element={<Services screenWidth={width} />} />
              <Route exact path="/contact" element={<Contact location={useCurrentUrl()} />} />
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
