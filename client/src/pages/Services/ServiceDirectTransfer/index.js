import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import DirectTransfer from "../../../assets/images/banners/dtg-dtf-banner.png";
import DirectTransferMobile from "../../../assets/images/banners/dtg-dtf-banner-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const screenPrintingResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceDirectTransfer = (props) => {

    const { pathname, screenWidth } = props;
    console.log(pathname);

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Direct Transfer</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="dtg-dtf-container">
                <Header as="h1" id="dtg-dtf-header">Direct Transfer</Header>
                <Image fluid src={screenWidth >= 992 ? DirectTransfer : DirectTransferMobile} />
                <br />
                <Header as="h2" className="dtg-dtf-subheader">How It Works</Header>
                <br />
                <p className="dtg-dtf-text">
                    Our DTG process involves printing directly onto garments using specialized InkJet technology. From T-shirts and hoodies to tote bags and hats, DTG allows for vibrant, high-quality prints 
                    with intricate details and vibrant colors. 
                </p>
                <br />
                <p className="dtg-dtf-text">
                    On the other hand, our DTF process utilizes a transfer film to apply designs onto various surfaces, including textiles, plastics, and more. With both DTG and DTF printing, the possibilities 
                    are endless for creating personalized apparel, promotional items, and branded merchandise.
                </p>
                <br />
                <p className="dtg-dtf-text">
                    The process for both DTG and DTF printing begins with digital design preparation. Whether you have your own design or need assistance creating one, our expert team will ensure that your artwork 
                    is optimized for printing. Once the design is ready, we proceed with printing using our state-of-the-art equipment, ensuring precise color reproduction and image clarity. For DTG printing, the 
                    garment is loaded onto the printer, and the design is directly printed onto the fabric. For DTF printing, the design is printed onto a transfer film, which is then applied to the desired surface 
                    using a heat press.
                </p>
                <br />
                <p className="dtg-dtf-text">
                    Quality is paramount in our printing process. We carefully inspect each print to ensure that colors are vibrant, details are sharp, and the overall quality meets our standards. With our commitment 
                    to excellence, you can trust that your printed products will exceed expectations.
                </p>
                <br />
                <p className="dtg-dtf-text">
                    Whether you're looking to create custom apparel for your business, personalized gifts for an event, or branded merchandise for your brand, our DTG and DTF printing services offer fast, reliable, and 
                    high-quality solutions. Let us bring your designs to life with precision and expertise.
                </p>
                <br />
                <Header as="h2" className="dtg-dtf-subheader">What You'll Get</Header>
                <div id="dtg-dtf-results-container">
                    {screenPrintingResults.map((result, index) => (
                        <div className="dtg-dtf-result-col" key={index}>
                            <Image className="dtg-dtf-result-img" src={result} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceDirectTransfer;