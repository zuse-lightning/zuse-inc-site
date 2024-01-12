import React, { Component } from "react";
import { Menu, Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {

        const { activeItem } = this.state;

        return (
            <div id="footer-container">
                <Menu secondary>
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
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header id="copyright" as="h4">©2024 Zuse Inc., American Contract Printing</Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Icon name="phone" />
                            <Header as="h4">Call: 203-675-9550</Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            
                        </Grid.Column>
                        <Grid.Column width={4}>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;