import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import AboutSection from "../../components/AboutSection";

class About extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Zuse Inc. - About</title>
                    <meta name="description" content="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events." />
                    <meta name="keywords" content="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items" />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                <AboutSection />
            </>
        );
    }
}

export default About;