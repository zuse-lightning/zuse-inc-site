import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import DirectTransfer from "../../../assets/images/banners/dtg-dtf-textless.png";
import PageContactFooter from "../../../components/PageContactFooter";
import DTG1 from "../../../assets/images/examples/DTG1.jpg";
import DTG2 from "../../../assets/images/examples/DTG2.jpg";
import DTG3 from "../../../assets/images/examples/DTG3.jpg";
import DTG4 from "../../../assets/images/examples/DTG4.jpg";
import DTF1 from "../../../assets/images/examples/DTF1.jpg";
import DTF2 from "../../../assets/images/examples/DTF2.jpg";
import DTF3 from "../../../assets/images/examples/DTF3.jpg";
import DTF4 from "../../../assets/images/examples/DTF4.jpg";
import ZuseFavicon from "../../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../../assets/images/ACP-favicon.png";

import "./style.css";

const DTGResults = [DTG1, DTG2, DTG3, DTG4];
const DTFResults = [DTF1, DTF2, DTF3, DTF4];

const ServiceDirectTransfer = (props) => {

    const { location } = props;

    return (
        <>
            <Helmet>
                {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}    
                <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc." } - Direct Transfer</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="dtg-dtf-container">
                <Header as="h1" id="dtg-dtf-header">Direct Transfer</Header>
                <Image fluid src={DirectTransfer} />
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
                <Header as="h2" className="dtg-dtf-subheader">What You'll Get With DTG</Header>
                <div className="dtg-dtf-results-container">
                    {DTGResults.map((result, index) => (
                        <div className="dtg-dtf-result-col" key={index}>
                            <Image className="dtg-dtf-result-img" draggable="false" src={result} />
                        </div>
                    ))}
                </div>
                <Header as="h2" className="dtg-dtf-subheader">What You'll Get With DTF</Header>
                <div className="dtg-dtf-results-container">
                    {DTFResults.map((result, index) => (
                        <div className="dtg-dtf-result-col" key={index}>
                            <Image className="dtg-dtf-result-img" draggable="false" src={result} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceDirectTransfer;