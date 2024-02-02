import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";

import "../style.css";

const DesktopNavbar = (props) => {

    const { catalogs, services } = props;
    
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
                    as={Dropdown}
                    className="header-nav-item"
                    name="catalogs"
                    text="Catalogs"
                >
                    <Dropdown.Menu>
                        {catalogs.map((catalog) => (
                            <Dropdown.Item as={Link} target=":blank" to={catalog.link}>{catalog.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Menu.Item>
                <Menu.Item
                    as={Dropdown}
                    className="header-nav-item"
                    name="services"
                    text="Services"
                >
                    <Dropdown.Menu>
                        {services.map((service) => (
                            <Dropdown.Item as={Link} to={service.link} >{service.name}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
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