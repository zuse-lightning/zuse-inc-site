import React from "react";
import { Header, Image } from "semantic-ui-react";
import CodingBackground from "../../../assets/images/coding-background.jpeg";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const shopifyResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceFulfillment = () => {
    return (
        <div id="shopify-container">
            <Header as="h1" id="shopify-header">Shopify Stores</Header>
            <Image src={CodingBackground} />
            <br />
            <Header as="h2" className="shopify-subheader">How It Works</Header>
            <br />
            <p className="shopify-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae.
                Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque
                saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem
                odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae. Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non!
            </p>
            <br />
            <Header as="h2" className="shopify-subheader">What You'll Get</Header>
            <div id="shopify-results-container">
                {shopifyResults.map((result, index) => (
                    <div className="shopify-result-col" key={index}>
                        <Image className="shopify-result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServiceFulfillment;