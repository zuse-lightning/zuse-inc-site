import React, { useState } from "react";
import { Menu, Dropdown, Icon, Image, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";

import "../style.css";

const MobileNavbar = (props) => {

    const { screenWidth, catalogs, services } = props;
    const [mainVisible, setMainVisible] = useState(false);
    const [catalogsVisible, setCatalogsVisible] = useState(false);
    const [servicesVisible, setServicesVisible] = useState(false);

    let logoSize;

    if (screenWidth >= 768) {
        logoSize = "medium";
    } else {
        logoSize = "small";
    }

    const catalogDropdown = document.getElementById("catalog-dropdown");
    const serviceDropdown = document.getElementById("service-dropdown");
    console.log(catalogDropdown);

    if (mainVisible) {
        if (catalogsVisible) {
            catalogDropdown.style.display = "block";
        } else if (servicesVisible) {
            serviceDropdown.style.display = "block";
        } else {
            catalogDropdown.style.display = "none";
            serviceDropdown.style.display = "none";
        }
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
                    className="header-nav-item"
                    name="catalogs"
                    text="Catalogs"
                    onClick={(e) => setCatalogsVisible(!catalogsVisible)}
                >
                    Catalogs
                    <Dropdown.Menu id="catalog-dropdown" visible={catalogsVisible}>
                        {catalogs.map((catalog) => (
                            <Dropdown.Item 
                                as={Link} 
                                onClick={(e) => setMainVisible(!mainVisible)} 
                                className="catalog-dropdown-item" 
                                target=":blank" 
                                to={catalog.link}>
                                    {catalog.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Menu.Item>
                <Menu.Item
                    className="header-nav-item"
                    to="/services"
                    name="services"
                    onClick={(e) => setServicesVisible(!servicesVisible)}
                >
                    Services
                    <Dropdown.Menu id="service-dropdown" visible={servicesVisible}>
                        {services.map((service) => (
                            <Dropdown.Item 
                                as={Link} 
                                onClick={(e) => setMainVisible(!mainVisible)} 
                                className="service-dropdown-item" 
                                to={service.link}>
                                    {service.name}
                            </Dropdown.Item>
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
            </Sidebar>


        </Menu>
    );
};

export default MobileNavbar;