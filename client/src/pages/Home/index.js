import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import HomeSlideShow from "../../components/HomeSlideShow";
import TopClients from "../../components/TopClients";
import HomeAbout from "../../components/HomeAbout";
import HomeTrustBadges from "../../components/HomeTrustBadges";
import OurServices from "../../components/OurServices";
import TopCatalogs from "../../components/TopCatalogs";
import HomeContactForm from "../../components/HomeContactForm";
import ZuseFavicon from "../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../assets/images/ACP-favicon.png";

import "./style.css";




class Home extends Component {
    render() {

        const { screenWidth, location } = this.props;
        
        return (
            <>
                <Helmet>
                    {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
                    <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc." } - {location.includes("americancontractprinting.com") ? "Wholesale Screen Printing" : "Custom Apparel, Promotional Items, and Web Stores" }</title>
                    <meta name="description" content="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events." />
                    <meta name="keywords" content="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items" />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <HomeSlideShow location={location} screenWidth={screenWidth} />
                <TopClients />
                <HomeAbout />
                <HomeTrustBadges />
                <OurServices />
                <TopCatalogs />
                <HomeContactForm screenWidth={screenWidth} />
            </>
        );
    }
}

export default Home;