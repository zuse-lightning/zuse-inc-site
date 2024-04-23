import React, { Component } from "react";
import AboutSection from "../../components/AboutSection";
import SEO from "../../components/SEO";

class About extends Component {
    render() {

        const { location, whichWebsite } = this.props;
        const aboutImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-About.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-About.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-About.png");
        const aboutURL = whichWebsite(location, "https://www.zuse.com/about", "https://www.americancontractprinting.com/about", "https://www.americanunionprint.com/about");

        return (
            <>
                <SEO 
                    location={location}
                    whichWebsite={whichWebsite}
                    title="About"
                    description="Manufacturing company that offers screen printed or embroidered custom apparel, promotional items, and web stores for various companies, organizations, and special events."
                    keywords="Zuse Inc., Branford, New Haven, Screen Printing, CT, Custom Apparel, Embroidery, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items"
                    type="website"
                    image={aboutImage}
                    url={aboutURL}
                />
                <AboutSection location={location} whichWebsite={whichWebsite} />
            </>
        );
    }
}

export default About;