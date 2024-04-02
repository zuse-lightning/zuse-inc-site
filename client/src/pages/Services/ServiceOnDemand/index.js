import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import PageContactFooter from "../../../components/PageContactFooter";
import ZuseFavicon from "../../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../../assets/images/ACP-favicon.png";

import "./style.css";

const ServiceOnDemand = (props) => {

    const { location } = props;

    return (
        <>
            <Helmet>
                {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
                <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc."} - Print On-Demand</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="on-demand-container">
                <Header as="h1" id="on-demand-header">Print On-Demand</Header>
                <Image draggable="false" fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/on-demand-textless.png" />
                <br />
                <Header as="h2" className="on-demand-subheader">How It Works</Header>
                <br />
                <p className="on-demand-text">
                    We offer fast and high-quality printing solutions to meet the diverse needs of our clients. Through our streamlined process, customers can easily place orders through our user-friendly
                    online platform or directly with our dedicated team.
                </p>
                <br />
                <p className="on-demand-text">
                    Upon receiving an order, we prepare the design files for printing, ensuring that any customization options specified by the customer are accurately reflected. We then produce each item on demand,
                    maintaining stringent quality control standards throughout the production process. Once the product is made, it is securely packaged and promptly shipped to the customer's designated address.
                </p>
                <br />
                <p className="on-demand-text">
                    Our commitment to fast turnaround times, easy customization options, efficient production capabilities, and dedication to delivering quality products and exceptional customer service highlight
                    us as a trusted partner for all print on demand needs. With easy customization options and efficient production capabilities, we stand ready to help individuals and businesses alike bring their
                    creative visions to life with speed and precision.
                </p>
                <br />
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceOnDemand;