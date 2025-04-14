import React from "react";
import { Header } from "semantic-ui-react";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

import "./style.css";

const TermsOfService = (props) => {
    return (
        <div id="terms-service-container">
            <Header id="terms-service-header" as="h1">Terms of Service</Header>
            <div id="terms-service">
                <Header id="terms-last-updated" as="h5">Last updated: 4/8/2025</Header>
            </div>
        </div>
    );
};

export default TermsOfService;