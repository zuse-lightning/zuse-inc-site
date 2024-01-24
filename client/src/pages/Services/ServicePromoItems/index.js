import React from "react";
import { Header, Image } from "semantic-ui-react";
import PromoItemsTemp from "../../../assets/images/main-banner.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const promoItemsResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServicePromoItems = () => {
    return (
        <div id="promo-items-container">
            <Header as="h1" id="promo-items-header">Promotional Items</Header>
            <Image src={PromoItemsTemp} />
            <br />
            <Header as="h2" className="promo-items-subheader">How It Works</Header>
            <br />
            <p className="promo-items-text">
                Need Boost brand visibility with our extensive range of promotional items. 
                From branded merchandise to unique giveaways, we help you create memorable 
                experiences for your audience. Maximize your marketing impact with customized 
                promotional products that leave a lasting impression.
            </p>
            <br />
            <Header as="h2" className="promo-items-subheader">What You'll Get</Header>
            <div id="promo-items-results-container">
                {promoItemsResults.map((result, index) => (
                    <div className="promo-items-result-col" key={index}>
                        <Image className="promo-items-result-img" src={result} />
                    </div>
                ))}
            </div>
            <PageContactFooter />
        </div>
    );
};

export default ServicePromoItems;