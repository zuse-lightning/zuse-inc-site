import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../style.css";

const DesktopNavbar = (props) => {

    const { catalogs, services, sticky, location, whichWebsite } = props;

    return (
        <Menu className={sticky} id="main-menu" fluid secondary>
            <Menu.Item
                className="header-nav-item"
                position="left"
                as={Link}
                to="/"
                name="home"
            >
                <div id="zuse-logo-container">
                    <Image 
                        draggable="false" 
                        size="medium" 
                        id="home-btn-img" 
                        src={whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/zuse-logo.jpg", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-logo.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-Logo.png")}
                    />
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
                    {catalogs.map((catalog, index) => (
                        <Dropdown.Item key={index} as={Link} target=":blank" to={catalog.link}>{catalog.name}</Dropdown.Item>
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
                    {services.map((service, index) => (
                        <Dropdown.Item key={index} as={Link} to={service.link} >{service.name}</Dropdown.Item>
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