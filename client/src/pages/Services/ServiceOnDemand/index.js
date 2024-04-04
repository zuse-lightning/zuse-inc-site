import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";


const ServiceOnDemand = (props) => {

    const { location } = props;
    const onDemandImage = (location.includes("americancontractprinting.com") ? "https://zuse-inc-bucket.s3.amazonaws.com/ACP-On-Demand.png" : "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-On-Demand.png");
    const onDemandURL = (location.includes("americancontractprinting.com") ? "https://www.americancontractprinting.com/services/print-on-demand" : "https://www.zuse.com/services/print-on-demand");

    return (
        <>
            <SEO
                location={location}
                title="Print On-Demand"
                description="We offer fast and high-quality printing solutions to meet the diverse needs of our clients. Through our streamlined process, customers can easily place orders through our user-friendly
                online platform or directly with our dedicated team."
                keywords="Print On-Demand, Branford, New Haven, CT, Fulfillment, Custom Apparel, T-Shirts, Hoodies, Stationary, Printing, On-Demand, Customization, Quality Control, Fast Turnaround, Shipping, Packaging, Customer Service"
                type="website"
                image={onDemandImage}
                url={onDemandURL}
            />
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