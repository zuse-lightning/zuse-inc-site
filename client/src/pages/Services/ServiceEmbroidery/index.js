import React from "react";
import { Header, Image } from "semantic-ui-react";
import EmbroideryTemp from "../../../assets/images/embroidery-banner.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const embroideryResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceEmbroidery = () => {
    return (
        <div id="embroidery-container">
            <Header as="h1" id="embroidery-header">Embroidery</Header>
            <Image src={EmbroideryTemp} />
            <br />
            <Header as="h2" className="embroidery-subheader">How It Works</Header>
            <br />
            <p className="embroidery-text">
                Our precision embroidery services add a touch of sophistication to your apparel, hats, and accessories. 
                The result? A polished finish that not only stands out visually but also adds a touch of elegance to every 
                stitch.
            </p>
            <br />
            <Header as="h2" className="embroidery-subheader">What You'll Get</Header>
            <div id="embroidery-results-container">
                {embroideryResults.map((result, index) => (
                    <div className="embroidery-result-col" key={index}>
                        <Image className="embroidery-result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServiceEmbroidery;