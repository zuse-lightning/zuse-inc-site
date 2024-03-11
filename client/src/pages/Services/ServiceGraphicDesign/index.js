import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import GraphicDesign from "../../../assets/images/banners/graphic-design-textless.png";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const ServiceGraphicDesign = (props) => {

    const { pathname } = props;
    console.log(pathname);

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Graphic Design</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="graphic-design-container">
                <Header as="h1" id="graphic-design-header">Graphic Design</Header>
                <Image fluid src={GraphicDesign} />
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