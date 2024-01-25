import React from "react";
import { Menu, Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const Footer = () => {
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
                    <Header id="copyright" as="h4">© 2024 Zuse Inc., American Contract Printing</Header>
                </div>
                <div className="footer-col">
                    <Header id="phone-number" as="h4"><Icon id="phone-icon" name="phone" />Call: 203-675-9550</Header>
                </div>
            </div>
        </div>
    );
}

export default Footer;