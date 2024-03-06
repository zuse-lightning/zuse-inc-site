import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import DyeSub from "../../../assets/images/banners/dye-sub-banner.png";
import DyeSubMobile from "../../../assets/images/banners/dye-sub-textless-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const screenPrintingResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceDyeSub = (props) => {

    const { pathname, screenWidth } = props;
    console.log(pathname);

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Dye Sublimation</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="dye-sub-container">
                <Header as="h1" id="dye-sub-header">Dye Sublimation</Header>
                <Image fluid src={DyeSubMobile} />
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
                <Header as="h2" className="dye-sub-subheader">What You'll Get</Header>
                <div id="dye-sub-results-container">
                    {screenPrintingResults.map((result, index) => (
                        <div className="dye-sub-result-col" key={index}>
                            <Image className="dye-sub-result-img" src={result} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceDyeSub;