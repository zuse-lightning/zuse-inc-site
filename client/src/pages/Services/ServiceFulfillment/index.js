import React from "react";
import { Header, Image } from "semantic-ui-react";
import FulfillmentTemp from "../../../assets/images/fulfillment-banner.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const fulfillmentResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceFulfillment = () => {
    return (
        <div id="fulfillment-container">
            <Header as="h1" id="fulfillment-header">Fulfillment</Header>
            <Image src={FulfillmentTemp} />
            <br />
            <Header as="h2" className="fulfillment-subheader">How It Works</Header>
            <br />
            <p className="fulfillment-text">
                Streamline your operations with our comprehensive fulfillment services. 
                From order processing to shipping, we handle it all, ensuring your products 
                reach customers efficiently and on time. Focus on growing your business while 
                we take care of the logistics.
            </p>
            <br />
            <Header as="h2" className="fulfillment-subheader">What You'll Get</Header>
            <div id="fulfillment-results-container">
                {fulfillmentResults.map((result, index) => (
                    <div className="fulfillment-result-col" key={index}>
                        <Image className="fulfillment-result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServiceFulfillment;