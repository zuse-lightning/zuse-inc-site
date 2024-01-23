import React, { useState } from "react";
import { Menu, Dropdown, Icon, Image, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";

import "../style.css";

const MobileNavbar = () => {

    const [visible, setVisible] = useState(false);
    console.log(visible);

    return (
        <Menu id="main-menu" fluid secondary>
            <Menu.Item>
                <Icon name="bars"
                    onClick={(e) => setVisible(!visible)}
                />
            </Menu.Item>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width="thin"
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
                </Sidebar>
            
            <Menu.Item
                className="header-nav-item"
                position="right"
                as={Link}
                to="/"
                name="home"
            >
                <div id="zuse-logo-container">
                    <Image size="medium" id="home-btn-img" src={ZuseLogo} />
                </div>
            </Menu.Item>
        </Menu>
    );
};

export default MobileNavbar;