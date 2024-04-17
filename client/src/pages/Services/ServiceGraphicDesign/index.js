import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";

const ServiceGraphicDesign = (props) => {

    const { location, whichWebsite } = props;
    const graphicDesignImage = (location.includes("americancontractprinting.com") ? "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Graphic-Design.png" : "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Graphic-Design.png");
    const graphicDesignURL = (location.includes("americancontractprinting.com") ? "https://www.americancontractprinting.com/services/graphic-design" : "https://www.zuse.com/services/graphic-design");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="Graphic Design"
                description="The designing process begins with a thorough understanding for your design goals, target audience, and brand identity. We'll work closely with you to brainstorm ideas, discuss concepts,
                and explore different design options until we have a clear understanding of your vision."
                keywords="Graphic Design, Branford, New Haven, CT, Custom Apparel, Banners, Decals, Fulfillment, Shopify Stores, Promotional Items"
                type="website"
                image={graphicDesignImage}
                url={graphicDesignURL}
            />
            <div id="graphic-design-container">
                <Header as="h1" id="graphic-design-header">Graphic Design</Header>
                <Image draggable="false" fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/graphic-design-textless.png" />
                <br />
                <Header as="h2" className="graphic-design-subheader">How It Works</Header>
                <br />
                <p className="graphic-design-text">
                    The designing process begins with a thorough understanding for your design goals, target audience, and brand identity. We'll work closely with you to brainstorm ideas, discuss concepts,
                    and explore different design options until we have a clear understanding of your vision.
                </p>
                <br />
                <p className="graphic-design-text">
                    Once we have a solid understanding of your needs, our experienced graphic designers will get to work, creating custom designs that capture the essence of your brand and communicate your
                    message effectively. Whether you're starting from scratch or refining an existing design, we'll take every detail into account to ensure that the final product exceeds your expectations.
                </p>
                <br />
                <p className="graphic-design-text">
                    Communication is key throughout the design process, and we'll keep you informed every step of the way. You'll have the opportunity to provide feedback and revisions, and our team will
                    work closely with you to incorporate your input and make sure you're completely satisfied with the final result.
                </p>
                <br />
                <p className="graphic-design-text">
                    Our goal is to create designs that not only look great but also serve their intended purpose, whether it's attracting customers, building brand recognition, or conveying information.
                    With our attention to detail, creativity, and dedication to customer satisfaction, you can trust that your graphic design needs are in good hands.
                </p>
                <br />
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceGraphicDesign;