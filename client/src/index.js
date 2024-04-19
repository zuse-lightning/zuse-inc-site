import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext";
import App from "./containers/App";
import ScrollToTop from "./components/ScrollToTop";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const helmetContext = {};
root.render(
  
    <HelmetProvider context={helmetContext}>
      <Router>
        <ScrollToTop />
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    </HelmetProvider>
);

reportWebVitals();