import React from "react";
import { Header } from "../../components/Header";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

import "./style.css";

const TermsOfService = (props) => {
    return (
        <div id="terms-service-container">
            <Header id="terms-service-header" as="h1">Terms of Service</Header>
            <div id="terms-service">

            </div>
        </div>
    );
};

export default TermsOfService;