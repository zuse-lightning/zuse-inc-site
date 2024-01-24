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
                Take your business online with our Shopify store creation services. 
                We design and develop an e-commerce platform tailored to your brand, 
                providing a seamless and secure shopping experience for your customers. 
                Elevate your potential of online sales with a professionally crafted Shopify 
                store.
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