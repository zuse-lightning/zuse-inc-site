import React, { Component } from "react";
import { Menu, Grid, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

class Footer extends Component {
    
    state = {};

    handleItemClick = (e, { name }) => this.setState({activeItem: name });

    render() {

        const { activeItem } = this.state;

        return (
            <div id="footer-container">
                <Menu id="footer-menu" secondary>
                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/"
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/about"
                        name="about"
                        active={activeItem === "about"}
                        onClick={this.handleItemClick}
                    >
                        About
                    </Menu.Item>

                    <Menu.Item
                        className="footer-nav-item"
                        as={Link}
                        to="/services"
                        name="services"
                        active={activeItem === "services"}
                        onClick={this.handleItemClick}
                    >
                        Services
                    </Menu.Item>
                    <Menu.Item
                        className="footer-nav-item"
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
                        <Grid.Column className="footer-col" width={4}>
                            <Header id="copyright" as="h4">© 2024 Zuse Inc., American Contract Printing</Header>
                        </Grid.Column>
                        <Grid.Column className="footer-col" width={4}>
                            <Header id="phone-number" as="h4"><Icon id="phone-icon" name="phone" />Call: 203-675-9550</Header>
                        </Grid.Column>
                        <Grid.Column className="footer-col" width={4}>
                            
                        </Grid.Column>
                        <Grid.Column className="footer-col" width={4}>
                            
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Footer;