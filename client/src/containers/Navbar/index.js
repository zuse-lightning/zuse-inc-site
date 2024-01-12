import React, { Component } from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../assets/images/zuse-logo.jpg";

import "./style.css";

class Navbar extends Component {

    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;

        return (
            <Menu id="main-menu" secondary>
                <Menu.Item
                    position="left"
                    as={Link}
                    to="/"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                >
                    <div id="zuse-logo-container">
                        <Image size="medium" id="home-btn-img" src={ZuseLogo} />
                    </div>
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/about"
                    name="about"
                    active={activeItem === "about"}
                    onClick={this.handleItemClick}
                >
                    About
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/catalogs"
                    name="catalogs"
                    active={activeItem === "catalogs"}
                    onClick={this.handleItemClick}
                >
                    Catalogs
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/services"
                    name="services"
                    active={activeItem === "services"}
                    onClick={this.handleItemClick}
                >
                    Services
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to="/contact"
                    name="contact"
                    active={activeItem === "contact"}
                    onClick={this.handleItemClick}
                >
                    Contact
                </Menu.Item>
            </Menu>
        );
    }
};

export default Navbar;