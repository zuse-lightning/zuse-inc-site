import React from "react";
import { Menu, Header, Icon, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = (props) => {

    const { location, whichWebsite } = props;

    return (
        <div id="footer-container">
            <div className="footer-col">
                <Menu id="footer-menu" secondary>
                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/"
                        name="home"
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/privacy"
                        name="privacy"
                    >
                        Privacy Policy
                    </Menu.Item>
                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/terms"
                        name="terms"
                    >
                        Terms of Service
                    </Menu.Item>
                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/contact"
                        name="contact"
                    >
                        Contact
                    </Menu.Item>
                </Menu>
                <br />
                <div id="footer-contact-container">
                    <div className="footer-contact-col">
                        <Header id="copyright" as="h4">© 2024 {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")}</Header>
                    </div>
                    <div className="footer-contact-col">
                        <p id="phone-number" as="h4"><Icon id="phone-icon" name="phone" />{whichWebsite(location, "203-458-3295", "203-458-3295", "203-410-8574")}</p>
                    </div>
                </div>
            </div>
            <div className="footer-col">
                <List id="footer-email-list">
                    <List.Header id="footer-email-list-header">Contact Us:</List.Header>
                    <List.Item className="footer-email-list-item" as="a" href={`mailto:ted${whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}`}>
                        ted{whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}
                    </List.Item>
                    <List.Item className="footer-email-list-item" as="a" href={`mailto:ted${whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}`}>
                        jesse{whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}
                    </List.Item>
                    <List.Item className="footer-email-list-item" as="a" href={`mailto:ted${whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}`}>
                        bookkeeper{whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}
                    </List.Item>
                    <List.Item className="footer-email-list-item" as="a" href={`mailto:ted${whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}`}>
                        customerservice{whichWebsite(location, "@zuse.com", "@americancontractprinting.com", "@americanunionprint.com")}
                    </List.Item>
                </List>
            </div>

        </div>
    );
}

export default Footer;