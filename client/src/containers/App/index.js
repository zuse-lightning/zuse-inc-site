import React, { useEffect, useState, useContext } from "react";
import { Sidebar } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import Navbar from "../../components/Navbar";
import PageBanner from "../../components/PageBanner";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Catalogs from "../../pages/Catalogs";
import Services from "../../pages/Services";
import Contact from "../../pages/Contact";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ResetPassword from "../../pages/ResetPassword";
import ForgotPassword from "../../pages/ForgotPassword";
import Profile from "../../pages/Profile";
import Reviews from "../../pages/Reviews";
import Review from "../../pages/Review";
import Write from "../../pages/Write";
import Edit from "../../pages/Edit";
import SocialLinks from "../../components/SocialLinks";
import Footer from "../../components/Footer";

import "./style.css";
import Careers from "../../pages/Careers";

const getWindowDimensions = () => {
  const page = document.querySelector("html");
  const { clientWidth: width, clientHeight: height } = page;
  return {
    width,
    height
  }
}

export const useCurrentUrl = () => {
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

export const whichWebsite = (url, zuseElement, contractElement, unionElement) => {
  if (url.includes("zuse.com")) {
    return zuseElement;
  } else if (url.includes("americancontractprinting.com")) {
    return contractElement;
  } else if (url.includes("americanunionprint.com")) {
    return unionElement;
  } else if (url.includes("localhost")) {
    return zuseElement;
  }
};

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
  const auth = useContext(AuthContext);

  return (
    <>
      <Navbar location={useCurrentUrl()} screenWidth={width} whichWebsite={whichWebsite} auth={auth} />
      <Sidebar.Pushable id="main-pushable">
        <Sidebar.Pusher>
          <PageBanner location={useCurrentUrl()} whichWebsite={whichWebsite} />
          <div id="main-container">
            <Routes>
              <Route exact path="/" element={<Home auth={auth} location={useCurrentUrl()} whichWebsite={whichWebsite} screenWidth={width} />} />
              <Route exact path="/about" element={<About location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
              <Route exact path="/catalogs/*" element={<Catalogs location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
              <Route exact path="/services/*" element={<Services location={useCurrentUrl()} whichWebsite={whichWebsite} screenWidth={width} />} />
              <Route exact path="/careers" element={<Careers auth={auth} location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
              <Route exact path="/contact" element={<Contact location={useCurrentUrl()} whichWebsite={whichWebsite} />} />
              <Route exact path="/register" element={<Register auth={auth} whichWebsite={whichWebsite} />} />
              <Route exact path="/login" element={<Login auth={auth} />} />
              <Route exact path="/reset/:id/:token" element={<ResetPassword auth={auth} whichWebsite={whichWebsite} />} />
              <Route exact path="/forgot" element={<ForgotPassword auth={auth} whichWebsite={whichWebsite} />} />
              <Route exact path="/profile/:id" element={<Profile auth={auth} whichWebsite={whichWebsite} />} />
              <Route exact path="/reviews" element={<Reviews auth={auth} whichWebsite={whichWebsite} />} />
              <Route exact path="/review/:id" element={<Review auth={auth} whichWebsite={whichWebsite} screenWidth={width} />} />
              <Route exact path="/write" element={<Write auth={auth} whichWebsite={whichWebsite} />} />
              <Route exact path="/edit/:id" element={<Edit auth={auth} whichWebsite={whichWebsite} />} />
            </Routes>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <SocialLinks />
      <Footer location={useCurrentUrl()} whichWebsite={whichWebsite} />
    </>
  );

}

export default App;