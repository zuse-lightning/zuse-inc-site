import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";

import "../style.css";

const DesktopNavbar = () => {
        return (
            <Menu id="main-menu" fluid secondary>
                <Menu.Item
                    className="header-nav-item"
                    position="left"
                    as={Link}
                    to="/"
                    name="home"
                >
                    <div id="zuse-logo-container">
                        <Image size="medium" id="home-btn-img" src={ZuseLogo} />
                    </div>
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    to="/about"
                    name="about"
                >
                    About
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    to="/catalogs"
                    name="catalogs"
                >
                    Catalogs
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    to="/services"
                    name="services"
                >
                    Services
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    to="/contact"
                    name="contact"
                >
                    Contact
                </Menu.Item>
            </Menu>
        );
};

export default DesktopNavbar;