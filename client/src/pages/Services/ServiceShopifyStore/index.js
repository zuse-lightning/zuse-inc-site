import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ShopifyStores from "../../../assets/images/banners/shopify-banner.png";
import ShopifyStoresMobile from "../../../assets/images/banners/shopify-banner-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import PGW from "../../../assets/screenshots/pgw-screenshot.png";
import TheSpot from "../../../assets/screenshots/thespot-screenshot.png";
import CTSchools from "../../../assets/screenshots/ct-schools-screenshot.png";
import WPRA from "../../../assets/screenshots/wpra-screenshot.png";

import "./style.css";

const shopifyResults = [
    { image: PGW, link: "https://progolfwarehouse.com/" },
    { image: TheSpot, link: "https://thespotsupplyco.com/" },
    { image: CTSchools, link: "https://ctschoolsstore.com/" },
    { image: WPRA, link: "https://wpra.store/" }
];


const ServiceShopifyStore = (props) => {

    const { screenWidth } = props;

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - E-Commerce</title>
                <meta name="description" content="Take your business online with our Shopify store creation services.
                    We design and develop an e-commerce platform tailored to your brand,
                    providing a seamless and secure shopping experience for your customers." />
                <meta name="keywords" content="Shopify Stores, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, Web Development, E-Commerce, Online Store" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="shopify-container">
                <Header as="h1" id="shopify-header">E-Commerce</Header>
                <Image draggable="false" fluid src={screenWidth >= 992 ? ShopifyStores : ShopifyStoresMobile} />
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