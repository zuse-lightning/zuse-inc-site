import React from "react";
import { Header, Divider } from "semantic-ui-react";
import SEO from "../../components/SEO";
import { useLocation } from "react-router-dom";

import "./style.css";

const PrivacyPolicy = (props) => {
    return (
        <div id="privacy-policy-container">
            <Header id="privacy-policy-header" as="h1">Privacy Policy</Header>
            <div id="privacy-policy">
                
            </div>
        </div>
    );
};

export default PrivacyPolicy;