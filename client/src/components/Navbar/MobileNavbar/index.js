import React, { useState } from "react";
import { Menu, Icon, Image, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";
import ACPLogo from "../../../assets/images/ACP-logo.png";

import "../style.css";

const MobileNavbar = (props) => {

    const { screenWidth, location } = props;
    const [mainVisible, setMainVisible] = useState(false);

    let logoSize;

    if (screenWidth >= 768) {
        logoSize = "medium";
    } else {
        logoSize = "small";
    }

    return (
        <Menu id="mobile-main-menu" fluid secondary>
            <Menu.Item
                className="header-nav-item"
                position="left"
                as={Link}
                to="/"
                name="home"
            >
                <div id="zuse-logo-container">
                    <Image size={logoSize} draggable="false" id="home-btn-img" src={location.includes("americancontractprinting.com") ? ACPLogo : ZuseLogo} />
                </div>
            </Menu.Item>
            <Menu.Item>
                <Icon id="header-nav-stack" name="bars"
                    onClick={(e) => setMainVisible(!mainVisible)}
                />
            </Menu.Item>
            <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                onHide={() => setMainVisible(false)}
                vertical
                visible={mainVisible}
                width="wide"
            >
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/about"
                    name="about"
                >
                    About
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/catalogs"
                    className="header-nav-item"
                    name="catalogs"
                >
                    Catalogs
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/services"
                    className="header-nav-item"
                    name="services"
                >
                    Services
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    as={Link}
                    onClick={(e) => setMainVisible(false)}
                    to="/contact"
                    name="contact"
                >
                    Contact
                </Menu.Item>
            </Sidebar>


        </Menu>
    );
};

export default MobileNavbar;