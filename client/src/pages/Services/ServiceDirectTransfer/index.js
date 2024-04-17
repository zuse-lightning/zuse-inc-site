import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";


const DTGResults = [
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTG1.jpg", 
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTG2.jpg", 
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTG3.jpg", 
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTG4.jpg"
];
const DTFResults = [
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTF1.jpg", 
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTF2.jpg", 
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTF3.jpg", 
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/DTF4.jpg"
];

const ServiceDirectTransfer = (props) => {

    const { location, whichWebsite } = props;
    const directTransferImage = (location.includes("americancontractprinting.com") ? "https://zuse-inc-bucket.s3.amazonaws.com/ACP-DirectTransfer.png" : "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Direct-Transfer.png");
    const directTransferURL = (location.includes("americancontractprinting.com") ? "https://www.americancontractprinting.com/services/dtg-dtf" : "https://www.zuse.com/services/dtg-dtf");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="Direct Transfer"
                description="Our DTG process involves printing directly onto garments using specialized InkJet technology. From T-shirts and hoodies to tote bags and hats, DTG allows for vibrant, high-quality prints with intricate details and vibrant colors."
                keywords="DTG, DTF, Direct Transfer, Direct to Garment, Direct to Film, Printing, InkJet, Apparel, T-Shirts, Hoodies, Tote Bags, Hats"
                type="website"
                image={directTransferImage}
                url={directTransferURL}
            />
            <div id="dtg-dtf-container">
                <Header as="h1" id="dtg-dtf-header">Direct Transfer</Header>
                <Image fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/dtg-dtf-textless.png" />
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