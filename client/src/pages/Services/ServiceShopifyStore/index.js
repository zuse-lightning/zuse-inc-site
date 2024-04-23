import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";

const shopifyResults = [
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/screenshots/pgw-screenshot.png", link: "https://progolfwarehouse.com/" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/screenshots/thespot-screenshot.png", link: "https://thespotsupplyco.com/" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/screenshots/ct-schools-screenshot.png", link: "https://ctschoolsstore.com/" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/screenshots/wpra-screenshot.png", link: "https://wpra.store/" }
];


const ServiceShopifyStore = (props) => {

    const { screenWidth, location, whichWebsite } = props;
    let shopifyBanner = screenWidth >= 992 ? "https://zuse-inc-bucket.s3.amazonaws.com/banners/shopify-banner.png" : "https://zuse-inc-bucket.s3.amazonaws.com/banners/shopify-banner-mobile.png";
    const ecommerceImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Ecommerce.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Ecommerce.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-Ecommerce.png");
    const ecommerceURL = whichWebsite(location, "https://www.zuse.com/services/ecommerce", "https://www.americancontractprinting.com/services/ecommerce", "https://www.americanunionprint.com/services/ecommerce");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="E-Commerce"
                description="Take your business online with our Shopify store creation services."
                keywords="E-Commerce, Branford, Web Development, New Haven, CT, Shopify, Store, Creation, Online, Sales, Print-On-Demand, Brand, Designs, Stock, Fluctuations, Marketplace, Brand Loyalty, Zuse Inc."
                type="website"
                image={ecommerceImage}
                url={ecommerceURL}
            />
            <div id="shopify-container">
                <Header as="h1" id="shopify-header">E-Commerce</Header>
                <Image draggable="false" fluid src={shopifyBanner} />
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
                <p className="shopify-text">Select one of our Shopify sites below to see for yourself!</p>
                <div id="shopify-results-container">
                    {shopifyResults.map((result, index) => (
                        <div className="shopify-result-col" key={index}>
                            <Image as={Link} to={result.link} target=":blank" className="shopify-result-img" draggable="false" src={result.image} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceShopifyStore;