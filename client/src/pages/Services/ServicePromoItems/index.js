import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import PromoItems from "../../../assets/images/banners/promo-items.png";
import PromoItemsMobile from "../../../assets/images/banners/promo-items-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const promoItemsResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServicePromoItems = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Promotional Items</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Promotional Items, Branford, New Haven, CT, Fulfillment, Custom Apparel, Mugs, Hats, Accessories, T-Shirts, Hoodies, Stationary" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="promo-items-container">
                <Header as="h1" id="promo-items-header">Promotional Items</Header>
                <Image fluid src={screenWidth >= 992 ? PromoItems : PromoItemsMobile} />
                <br />
                <Header as="h2" className="promo-items-subheader">How It Works</Header>
                <br />
                <p className="promo-items-text">
                    Need to boost brand visibility? With our extensive range of promotional items,
                    from branded merchandise to unique giveaways, we help you create memorable
                    experiences for your audience. Maximize your marketing impact with customized
                    promotional products that leave a lasting impression!
                </p>
                <br />
                <p className="promo-items-text">
                    Our process begins with a consultation to understand your branding goals and target 
                    audience. Whether you're looking for giveaways for a trade show, employee incentives, 
                    or customer appreciation gifts, we'll work closely with you to select the perfect 
                    promotional items that align with your brand identity and objectives.
                </p>
                <br />
                <p className="promo-items-text">
                    Once we've identified the right products for your needs, our skilled team will assist you 
                    in customizing them to reflect your brand. Whether it's screen printing, embroidery, DTG 
                    printing, or other customization methods, we have the expertise and technology to ensure 
                    that your logo or artwork looks sharp and professional on each item.
                </p>
                <br />
                <p className="promo-items-text">
                    We offer a wide range of promotional items to suit every budget and marketing strategy. 
                    From apparel and accessories to tech gadgets and office supplies, we have something for 
                    every occasion and audience. Plus, with our fast turnaround times and reliable delivery 
                    service, you can trust that your promotional items will be ready when you need them.
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
        </>
    );
};

export default ServicePromoItems;