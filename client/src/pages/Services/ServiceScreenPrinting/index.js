import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";

const screenPrintingResults = [
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen1.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen3.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen5.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen6.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen7.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen8.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen9.jpg",
    "https://zuse-inc-bucket.s3.amazonaws.com/examples/Screen10.jpg"
];

const ServiceScreenPrinting = (props) => {

    const { location, whichWebsite } = props;
    const screenPrintingImage = whichWebsite(location, "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Screenprinting.png", "https://zuse-inc-bucket.s3.amazonaws.com/ACP-ScreenPrinting.png", "https://zuse-inc-bucket.s3.amazonaws.com/Union-ScreenPrinting.png");
    const screenPrintingURL = whichWebsite(location, "https://www.zuse.com/services/screenprinting", "https://www.americancontractprinting.com/services/screenprinting", "https://www.americanunionprint.com/services/screenprinting");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="Screen Printing"
                description="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands out with high-quality prints that capture attention and leave a lasting impression."
                keywords="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies"
                type="website"
                image={screenPrintingImage}
                url={screenPrintingURL}
            />
            <div id="screen-printing-container">
                <Header as="h1" id="screen-printing-header">Screen Printing</Header>
                <Image draggable="false" fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/screenprinting.jpg" />
                <br />
                <Header as="h2" className="screen-printing-subheader">How It Works</Header>
                <br />
                <p className="screen-printing-text">
                    From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression.
                </p>
                <br />
                <p className="screen-printing-text">
                    Whether you have existing artwork or need assistance creating a custom design, our skilled team
                    ensures that your vision is brought to life with precision and clarity. Once the design is finalized,
                    we create screens for each color in your design, allowing for vibrant and detailed prints.
                </p>
                <br />
                <p className="screen-printing-text">
                    Using high-quality inks and advanced equipment, we carefully apply each color layer onto the material,
                    resulting in bold, long-lasting prints that make a statement. Whether you're printing on cotton, polyester,
                    or specialty fabrics, our screen printing process delivers consistent results with exceptional color accuracy
                    and detail.
                </p>
                <br />
                <p className="screen-printing-text">
                    Quality is our top priority. We conduct thorough inspections throughout the printing process to ensure that each
                    print meets our strict standards for clarity, color consistency, and durability. With our attention to detail and
                    commitment to excellence, you can trust that your printed products will exceed expectations.
                </p>
                <br />
                <p className="screen-printing-text">
                    Whether you're looking to create custom apparel for your team, promotional items for your business, or branded merchandise for your event, our screen printing services offer a reliable and cost-effective solution.
                </p>
                <br />
                <Header as="h2" className="screen-printing-subheader">What You'll Get</Header>
                <div id="screen-printing-results-container">
                    {screenPrintingResults.map((result, index) => (
                        <div className="screen-printing-result-col" key={index}>
                            <Image className="screen-printing-result-img" src={result} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceScreenPrinting;