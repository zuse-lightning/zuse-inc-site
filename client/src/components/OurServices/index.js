import React from "react";
import { Header, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import ScreenPrintingIcon from "../../assets/images/screen-printing-red.png";
import EmbroideryIcon from "../../assets/images/embroidery-red.png";
import PromoItemsIcon from "../../assets/images/promo-items-red.png";
import FulfillmentIcon from "../../assets/images/fulfillment-red.png";
import WebStoreIcon from "../../assets/images/web-stores-red.png";

import "./style.css";

const services = [
    { image: ScreenPrintingIcon, path: "/services/screenprinting", title: "Screen Printing" },
    { image: EmbroideryIcon, path: "/services/embroidery", title: "Embroidery" },
    { image: PromoItemsIcon, path: "/services/promo-items", title: "Promotional Items" },
    { image: FulfillmentIcon, path: "/services/fulfillment", title: "Fulfillment Services" },
    { image: WebStoreIcon, path: "/services/shopify-stores", title: "Shopify Store" }
];



const OurServices = () => {
    
    const { pathname } = useLocation();
    
    return (
        <div id="our-services-container">
            {<Header as="h1" id="our-services-header">Our Services</Header>}
            <div id="services-container">
                {services.map((service, index) => (
                    <div className="services-col" key={index}>
                        <div className="services-card">
                            <Image className="services-card-image" src={service.image} />
                            <div className="services-card-header">{service.title}</div>
                            <Button as={Link} to={service.path} fluid className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurServices;