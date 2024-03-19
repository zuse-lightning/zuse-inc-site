import React from "react";
import { Menu, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = (props) => {

    const { location } = props;

    return (
        <div id="footer-container">
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
                    to="/about"
                    name="about"
                >
                    About
                </Menu.Item>

                <Menu.Item
                    className="footer-nav-item"
                    as={Link}
                    to="/services"
                    name="services"
                >
                    Services
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
            <div id="footer-contact-container">
                <div className="footer-col">
                    <Header id="copyright" as="h4">© 2024 {location.includes("www.americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc." }</Header>
                </div>
                <div className="footer-col">
                    <Header id="phone-number" as="h4"><Icon id="phone-icon" name="phone" />Call: 203-458-3295</Header>
                </div>
            </div>
        </div>
    );
}

export default Footer;