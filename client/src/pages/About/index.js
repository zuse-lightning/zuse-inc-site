import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../../components/AboutSection";
import ZuseFavicon from "../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../assets/images/ACP-favicon.png";

class About extends Component {
    render() {

        const { location } = this.props;

        return (
            <>
                <Helmet>
                    {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
                    <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc." } - About</title>
                    <meta name="description" content="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events." />
                    <meta name="keywords" content="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items" />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <AboutSection location={location} />
            </>
        );
    }
}

export default About;