import React from "react";
import { Header, Image } from "semantic-ui-react";
import { Helmet } from "react-helmet-async";
import Sewing from "../../../assets/images/banners/sewing-banner.png";
import SewingMobile from "../../../assets/images/banners/sewing-banner-mobile.png";
import PageContactFooter from "../../../components/PageContactFooter";
import BlackUtility from "../../../assets/proxy/black-utility.png";
import BlackWomenUnion from "../../../assets/proxy/black-women-union.png";
import GreyUtility from "../../../assets/proxy/grey-utility.png";
import WhiteWomenUnion from "../../../assets/proxy/white-women-union.png";

import "./style.css";

const screenPrintingResults = [BlackUtility, WhiteWomenUnion, GreyUtility, BlackWomenUnion];


const ServiceSewing = (props) => {

    const { pathname, screenWidth } = props;
    console.log(pathname);

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Sewing</title>
                <meta name="description" content="From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands
                    out with high-quality prints that capture attention and leave a lasting impression." />
                <meta name="keywords" content="Screen Printing, Branford, New Haven, CT, Fulfillment, Promotional Items, Custom Apparel, T-Shirts, Hoodies" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            <div id="sewing-container">
                <Header as="h1" id="sewing-header">Sewing</Header>
                <Image fluid src={screenWidth >= 992 ? Sewing : SewingMobile} />
                <br />
                <Header as="h2" className="sewing-subheader">How It Works</Header>
                <br />
                <p className="sewing-text">
                    We're here to make your sewing projects a breeze. Whether you need alterations, repairs, or custom creations, we've got you covered. Just tell us what you need, and we'll take care of the 
                    rest. Our skilled team of seamstresses and tailors will ensure that every stitch is perfect and every detail is just right. From fabric selection to final delivery, we work closely with our 
                    clients to ensure that their sewing projects are completed to ensure your satisfaction.
                </p>
                <br />
                <p className="sewing-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae.
                    Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque
                    saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum eaque, nesciunt iste autem
                    odio animi doloremque delectus ipsum ex reiciendis libero fuga, amet repudiandae. Rerum consequuntur pariatur magnam maxime. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                    optio nam neque assumenda alias voluptatibus maiores accusantium? Fugiat, cumque saepe eius incidunt quod, suscipit distinctio a labore, accusantium officiis non!
                </p>
                <br />
                <Header as="h2" className="sewing-subheader">What You'll Get</Header>
                <div id="sewing-results-container">
                    {screenPrintingResults.map((result, index) => (
                        <div className="sewing-result-col" key={index}>
                            <Image className="sewing-result-img" src={result} />
                        </div>
                    ))}
                </div>
                <PageContactFooter />
            </div>
        </>
    );
};

export default ServiceSewing;