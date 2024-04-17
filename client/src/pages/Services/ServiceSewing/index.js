import React from "react";
import { Header, Image } from "semantic-ui-react";
import PageContactFooter from "../../../components/PageContactFooter";
import SEO from "../../../components/SEO";

import "./style.css";

const ServiceSewing = (props) => {

    const { location, whichWebsite } = props;
    const sewingImage = (location.includes("americancontractprinting.com") ? "https://zuse-inc-bucket.s3.amazonaws.com/ACP-Sewing.png" : "https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Sewing.png");
    const sewingURL = (location.includes("americancontractprinting.com") ? "https://www.americancontractprinting.com/services/sewing" : "https://www.zuse.com/services/sewing");

    return (
        <>
            <SEO 
                location={location}
                whichWebsite={whichWebsite}
                title="Sewing"
                description="We're here to make your sewing projects a breeze. Whether you need alterations, repairs, or custom creations, we've got you covered."
                keywords="Sewing, Alterations, Repairs, Custom Creations, Seamstresses, Tailors, Fabric Selection, Delivery"
                type="website"
                image={sewingImage}
                url={sewingURL}
            />
            <div id="sewing-container">
                <Header as="h1" id="sewing-header">Sewing</Header>
                <Image draggable="false" fluid src="https://zuse-inc-bucket.s3.amazonaws.com/banners/sewing-textless.png" />
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