import React from "react";
import { Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseBuilding from "../../assets/images/zuse-building.jpg";

import "./style.css";

const AboutSection = () => {
    return (
        <div id="about-page-container">
            <div id="about-container">
                <div className="about-col">
                    <Image id="zuse-building-img" src={ZuseBuilding} />
                </div>
                <div className="about-col">
                    <Header as="h1" id="about-header">We Make Your Designs Reality</Header>
                    <p id="about-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae.
                        Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque 
                        saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem 
                        odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae. Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, 
                        optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non!
                    </p>
                    <Link to="/contact">
                        <Button id="contact-us-btn">CONTACT US</Button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutSection;