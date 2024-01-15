import React from "react";
import { Container, Header, List } from "semantic-ui-react";

import "./style.css";

const HomeAbout = () => {
    return (
        <div id="home-about-container">
            <Header as="h1" id="home-about-header">About</Header>
            <div id="home-about-text-container">
                <p className="home-about-text" id="paragraph1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione amet vero velit ad sapiente atque asperiores iure veritatis, aut beatae perspiciatis unde inventore molestiae delectus odit, consequuntur tempora? Harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum repudiandae cupiditate dolore ducimus asperiores maiores dignissimos provident id nulla? Deleniti, obcaecati soluta! Ipsa quod minima explicabo autem doloribus. Eos.
                </p>
                <br />
                <p className="home-about-text" id="paragraph2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ratione amet vero velit ad sapiente atque asperiores iure veritatis, aut beatae perspiciatis unde inventore molestiae delectus odit, consequuntur tempora? Harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laborum repudiandae cupiditate dolore ducimus asperiores maiores dignissimos provident id nulla? Deleniti, obcaecati soluta! Ipsa quod minima explicabo autem doloribus. Eos.
                </p>
                <br />
                <List id="home-about-list">
                    <List.Item className="home-about-list-item">
                        <List.Icon className="home-about-list-icon" name="check" />
                        <List.Content className="home-about-list-content">
                            Positive quality that sets us apart from the rest of the crowd!
                        </List.Content>
                    </List.Item>
                    <List.Item className="home-about-list-item">
                        <List.Icon className="home-about-list-icon" name="check" />
                        <List.Content className="home-about-list-content">
                            Years of business experience in the field, unmatched by the competition!
                        </List.Content>
                    </List.Item>
                    <List.Item className="home-about-list-item">
                        <List.Icon className="home-about-list-icon" name="check" />
                        <List.Content className="home-about-list-content">
                            100% Customer Satisfaction GUARANTEED!
                        </List.Content>
                    </List.Item>
                </List>
            </div>
        </div>
    );
}

export default HomeAbout;