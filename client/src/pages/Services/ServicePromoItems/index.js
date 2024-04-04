import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";

const ServicePromoItems = (props) => {

    const { screenWidth, location } = props;

    let desktopBanner;
    if (location.includes("americancontractprinting.com")) {
        desktopBanner = "https://zuse-inc-bucket.s3.amazonaws.com/banners/ACP-Promo-Items.png";
    } else {
        desktopBanner = "https://zuse-inc-bucket.s3.amazonaws.com/banners/promo-items.png";
    }

    const promoItemsImage = (location.includes("americancontractprinting.com") ? "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Promo-Items.png" : "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Promo-Items.png");
    const promoItemsURL = (location.includes("americancontractprinting.com") ? "https://www.americancontractprinting.com/services/promo-items" : "https://www.zuse.com/services/promo-items");

    return (
        <>
            <SEO
                location={location}
                title="Promotional Items"
                description="Need to boost brand visibility? With our extensive range of promotional items,
                from branded merchandise to unique giveaways, we help you create memorable
                experiences for your audience."
                keywords="Promotional Items, Branford, New Haven, CT, Custom Apparel, Branding, Marketing, Giveaways, Trade Shows, Employee Incentives, Customer Appreciation, Screen Printing, Embroidery, DTG Printing, Apparel, Accessories, Tech Gadgets, Office Supplies"
                type="website"
                image={promoItemsImage}
                url={promoItemsURL}
            />
            <div id="promo-items-container">
                <Header as="h1" id="promo-items-header">Promotional Items</Header>
                <Image draggable="false" fluid src={screenWidth >= 992 ? desktopBanner : "https://zuse-inc-bucket.s3.amazonaws.com/banners/promo-items-mobile.png"} />
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
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServicePromoItems;