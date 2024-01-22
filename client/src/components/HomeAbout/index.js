import React from "react";
import { Header, List } from "semantic-ui-react";

import "./style.css";

const HomeAbout = () => {
    return (
        <div id="home-about-container">
            <Header as="h1" id="home-about-header">About</Header>
            <div id="home-about-text-container">
                <p className="home-about-text" id="paragraph1">
                    We’re dedicated to providing personalized clothing solutions for businesses of all sizes. Our
                    primary focus is on fulfilling our responsibilities to help you achieve your desired goals.
                </p>
                <br />
                <p className="home-about-text" id="paragraph2">
                    Whether it's creating branded uniforms, promotional merchandise, or other customized clothing
                    items, we strive to deliver high-quality products that align with your brand identity.
                </p>
                <br />
                <List id="home-about-list">
                    <List.Item className="home-about-list-item">
                        <List.Header>
                            Experience and Quality
                        </List.Header>
                        <List.List>
                            <List.Item>
                                <List.Icon className="home-about-sublist-icon" name="check" />
                                <List.Content className="home-about-sublist-content">
                                    With over 30 years of experience in providing the best quality custom shirts and great
                                    customer service.
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item className="home-about-list-item">
                        <List.Header>
                            Convenience
                        </List.Header>
                        <List.List>
                            <List.Item>
                                <List.Icon className="home-about-sublist-icon" name="check" />
                                <List.Content className="home-about-sublist-content">
                                    Give us the shirt design of your choice and we will make it for you.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon className="home-about-sublist-icon" name="check" />
                                <List.Content className="home-about-sublist-content">
                                    Our Custom Shirts have various designs to choose from, selections from shirt colors,
                                    style, and sizes.
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon className="home-about-sublist-icon" name="check" />
                                <List.Content className="home-about-sublist-content">
                                    We ship it to your home!
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item className="home-about-list-item">
                        <List.Header>
                            Low Prices
                        </List.Header>
                        <List.List>
                            <List.Item>
                                <List.Icon className="home-about-sublist-icon" name="check" />
                                <List.Content className="home-about-sublist-content">
                                    Our competitive prices and quality are matched by few! If you do happen to find a better
                                    deal ask us about our price match guarantee, conditions apply.
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Item>
                </List>
            </div>
        </div>
    );
}

export default HomeAbout;