import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom"

class Navbar extends Component {

    state = {};

    handleItemClick = (e, { name }) => this.setState({activeItem: name });

    render() {

        const { activeItem } = this.state;
        
        return (
            <Menu>
                <Menu.Item
                    as={Link}
                    to="/"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                >
                    Home
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