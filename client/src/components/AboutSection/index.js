import React from "react";
import { Header, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const AboutSection = (props) => {

    const { location, whichWebsite } = props;
    let buildingImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/zuse-building.jpg", "https://zuse-inc-bucket.s3.amazonaws.com/American-Contract-Printing.jpg", "https://zuse-inc-bucket.s3.amazonaws.com/zuse-building.jpg");

    return (
        <div id="about-page-container">
            <div id="about-container">
                <div className="about-col">
                    <Image draggable="false" id="zuse-building-img" src={buildingImage} />
                </div>
                <div className="about-col">
                    <Header as="h1" id="about-header">We Make Your Designs Reality</Header>
                    <p id="about-text">
                        With over 30 years of dedicated service in the apparel industry, we take immense pride in providing 
                        our customers with the highest standards of quality and satisfaction.
                    </p>
                    <p id="about-text">
                        While there are other companies in the market like Printful and similar services, what distinguishes us 
                        is our unwavering commitment to our clients' success. We understand that building a brand is more than 
                        just printing designs on garments… {whichWebsite(location, "Zuse Inc.", "American Contract Printing", "American Union Print")} is about creating a lasting impression and forging meaningful 
                        connections with your audience. That's why we offer a wide variety of services tailored to meet the unique 
                        needs of each brand we work with.
                    </p>
                    <p id="about-text">
                        We pride ourselves on our flexibility and adaptability. 
                    </p>
                    <p id="about-text">
                        Doesn’t matter if you're a small startup or an established enterprise, we have the capacity and expertise to 
                        collaborate with you every step of the way. From concept development to production and distribution, we provide 
                        end-to-end solutions that streamline the process and maximize efficiency, allowing you to focus on what you do 
                        best. We’re here to make it happen for you. 
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