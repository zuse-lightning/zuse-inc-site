import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Icon, Image, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";

import "../style.css";

const MobileNavbar = (props) => {

    const { screenWidth } = props;
    const [mainVisible, setMainVisible] = useState(false);

    let logoSize;

    if (screenWidth >= 768) {
        logoSize = "medium";
    } else {
        logoSize = "small";
    }

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
                    <Image size={logoSize} id="home-btn-img" src={ZuseLogo} />
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
                    to="/about"
                    name="about"
                >
                    About
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/catalogs"
                    className="header-nav-item"
                    name="catalogs"
                >
                    Catalogs
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/services"
                    className="header-nav-item"
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
            </Sidebar>


        </Menu>
    );
};

export default MobileNavbar;