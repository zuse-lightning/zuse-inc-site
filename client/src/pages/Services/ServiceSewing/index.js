import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import Sewing from "../../../assets/images/banners/sewing-textless.png";
import PageContactFooter from "../../../components/PageContactFooter";
import ZuseFavicon from "../../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../../assets/images/ACP-favicon.png";

import "./style.css";

const ServiceSewing = (props) => {

    const { location } = props;

    return (
        <>
            <Helmet>
                {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
                <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc."} - Sewing</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="sewing-container">
                <Header as="h1" id="sewing-header">Sewing</Header>
                <Image draggable="false" fluid src={Sewing} />
                <br />
                <Header as="h2" className="sewing-subheader">How It Works</Header>
                <br />
                <p className="sewing-text">
                    We're here to make your sewing projects a breeze. Whether you need alterations, repairs, or custom creations, we've got you covered. Just tell us what you need, and we'll take care of the
                    rest. Our skilled team of seamstresses and tailors will ensure that every stitch is perfect and every detail is just right. From fabric selection to final delivery, we work closely with our
                    clients to ensure that their sewing projects are completed to ensure your satisfaction.
                </p>
                <br />
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceSewing;