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


const ServiceShopifyStore = () => {
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
            <p className="shopify-text">
                We’ve been in the online retail business for over 5 years and have always enjoyed 
                giving brands the potential to grow their business. Our print-on-demand services 
                are about bringing your brand to life. Imagine having the freedom to create unique 
                designs without dealing with any headaches communicating to other companies about 
                crucial business decisions. We print and fulfill orders as they come in, so you don't 
                have to worry about any stock fluctuations. You really get to decide what works best 
                for your brand! In a crowded online marketplace, standing out is not an option; it's 
                a necessity. Our print-on-demand services are designed to allow your brand to make a 
                statement. Our mission is to have your customers receive products that not only meet 
                but exceed their expectations, leaving a lasting impression that fosters brand loyalty.
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

export default ServiceShopifyStore;