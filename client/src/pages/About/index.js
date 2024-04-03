import React, { Component } from "react";
import AboutSection from "../../components/AboutSection";
import SEO from "../../components/SEO";

class About extends Component {
    render() {

        const { location } = this.props;

        return (
            <>
                <SEO 
                    location={location}
                    title="About"
                    description="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events."
                    keywords="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items"
                    type="website"
                    image="https://zuse-inc-bucket.s3.amazonaws.com/Zuse-About.png"
                    url="https://www.zuse.com/about"
                />
                <AboutSection location={location} />
            </>
        );
    }
}

export default About;