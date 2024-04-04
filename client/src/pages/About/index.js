import React, { Component } from "react";
import AboutSection from "../../components/AboutSection";
import SEO from "../../components/SEO";

class About extends Component {
    render() {

        const { location } = this.props;
        const aboutImage = (location.includes("americancontractprinting.com") ? "https://zuse-inc-bucket.s3.amazonaws.com/ACP-About.png" : "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-About.png");
        const aboutURL = (location.includes("americancontractprinting.com") ? "https://www.americancontractprinting.com/about" : "https://www.zuse.com/about");

        return (
            <>
                <SEO 
                    location={location}
                    title="About"
                    description="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events."
                    keywords="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items"
                    type="website"
                    image={aboutImage}
                    url={aboutURL}
                />
                <AboutSection location={location} />
            </>
        );
    }
}

export default About;