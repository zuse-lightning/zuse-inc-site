import React, { useState } from "react";
import { Menu, Dropdown, Icon, Image, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../../assets/images/zuse-logo.jpg";

import "../style.css";

const catalogs = [
    { name: "SanMar", link: "https://sanmar.com/" },
    { name: "S&S Activewear", link: "https://www.ssactivewear.com/" },
    { name: "AlphaBroder", link: "https://www.alphabroder.com/home" },
    { name: "Augusta Sportswear", link: "https://www.augustasportswear.com/" },
    { name: "Rothco", link: "https://www.rothco.com/" },
    { name: "Charles River Apparel", link: "https://www.charlesriverapparel.com/" },
    { name: "Citadel Brands", link: "https://www.citadelbrands.com/home_page" },
    { name: "Cutter and Buck", link: "https://cutterbuck.com/" },
    { name: "Stormtech USA", link: "https://www.stormtechusa.com/" },
    { name: "Edwards Garment", link: "https://www.edwardsgarment.com/" }
];

const MobileNavbar = () => {

    const [visible, setVisible] = useState(false);
    console.log(visible);

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
            </Menu.Item><Menu.Item>
                <Icon id="header-nav-stack" name="bars"
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

            
        </Menu>
    );
};

export default MobileNavbar;