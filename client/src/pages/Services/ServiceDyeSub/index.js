import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";


const ServiceDyeSub = (props) => {

    const { location, whichWebsite } = props;
    const dyeSubImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Dye-Sub.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Dye-Sub.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-Dye-Sub.png");
    const dyeSubURL = whichWebsite(location, "https://www.zuse.com/services/dye-sublimation", "https://www.americancontractprinting.com/services/dye-sublimation", "https://www.americanunionprint.com/services/dye-sublimation");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="Dye Sublimation"
                description="Our dye sublimation process begins working closely with our clients to understand their vision and requirements for their printed products."
                keywords="Dye Sublimation, Sublimation Printer, Heat Press, Sublimation Ink, Transfer Paper, Substrate, Vibrant Colors, High-Resolution Printing"
                type="website"
                image={dyeSubImage}
                url={dyeSubURL}
            />
            <div id="dye-sub-container">
                <Header as="h1" id="dye-sub-header">Dye Sublimation</Header>
                <Image draggable="false" fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/dye-sub-textless-mobile.png" />
                <br />
                <Header as="h2" className="dye-sub-subheader">How It Works</Header>
                <br />
                <p className="dye-sub-text">
                    Our dye sublimation process begins working closely with our clients to understand their vision and requirements for their printed products. Once the design concept is finalized, our 
                    skilled graphic designers prepare the digital artwork, ensuring it's optimized for vibrant colors and high-resolution printing. 
                </p>
                <br />
                <p className="dye-sub-text">
                    With the digital design ready, we prepare the sublimation printer and heat press for printing, selecting the appropriate sublimation ink and transfer paper for the specific substrate 
                    and design specifications. Using heat and pressure, we transfer the sublimation ink from the transfer paper onto the substrate, causing it to sublimate into a gas and permeate the surface, 
                    resulting in vivid and durable color reproduction. 
                </p>
                <br />
                <p className="dye-sub-text">
                    After printing, the substrate is allowed to cool, ensuring the colors are permanently embedded into the material. Depending on the product, additional finishing techniques such as cutting, 
                    sewing, or assembly may be performed. Each finished product undergoes a rigorous quality check to ensure vibrant colors, sharp prints, and overall quality meet our standards. Finally, we 
                    carefully package the finished products and deliver them to our clients, offering prompt and reliable delivery service. 
                </p>
                <br />
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceDyeSub;