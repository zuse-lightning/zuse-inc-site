import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const PageContactFooter = () => {
    return (
        <div id="page-contact-footer">
            <Header id="page-contact-header" as="h1">Let's Get Started</Header>
            <Header as="h3" id="page-contact-subheader">Feel free to reach out to us, no matter how many questions you have!</Header>
            <Link to="/contact">
                <Button id="page-contact-btn">CONTACT US</Button>
            </Link>
        </div>
    );
}

export default PageContactFooter;