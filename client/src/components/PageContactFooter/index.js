import React from "react";
import { Header, Button } from "semantic-ui-react";

import "./style.css";

const PageContactFooter = () => {
    return (
        <div id="page-contact-footer">
            <Header id="page-contact-header" as="h1">Let's Get Started</Header>
            <p id="page-contact-text">Feel free to reach out to us, no matter how many questions you have!</p>
            <Button id="page-contact-btn">CONTACT US</Button>
        </div>
    );
}

export default PageContactFooter;