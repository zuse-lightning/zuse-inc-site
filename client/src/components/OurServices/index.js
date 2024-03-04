import React from "react";
import { Header, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import ScreenPrintingIcon from "../../assets/images/screen-printing-blue.png";
import EmbroideryIcon from "../../assets/images/embroidery-blue.png";
import PromoItemsIcon from "../../assets/images/promo-items-blue.png";
import FulfillmentIcon from "../../assets/images/fulfillment-blue.png";
import WebStoreIcon from "../../assets/images/web-stores-blue.png";
import DirectTransferIcon from "../../assets/images/dtg-dtf-blue.png";
import DyeSubIcon from "../../assets/images/dye-sublimation-blue.png";
import GraphicDesignIcon from "../../assets/images/graphic-design-blue.png";
import SewingIcon from "../../assets/images/sewing-blue.png";
import OnDemandIcon from "../../assets/images/print-on-demand-blue.png";

import "./style.css";

const services = [
    { image: ScreenPrintingIcon, path: "/services/screenprinting", title: "Screen Printing" },
    { image: EmbroideryIcon, path: "/services/embroidery", title: "Embroidery" },
    { image: PromoItemsIcon, path: "/services/promo-items", title: "Promotional Items" },
    { image: FulfillmentIcon, path: "/services/fulfillment", title: "Fulfillment Services" },
    { image: WebStoreIcon, path: "/services/ecommerce", title: "E-Commerce" },
    { image: GraphicDesignIcon, path: "/services/graphic-design", title: "Graphic Design" },
    { image: OnDemandIcon, path: "/services/print-on-demand", title: "Print On-Demand" },
    { image: SewingIcon, path: "/services/sewing", title: "Sewing" },
    { image: DyeSubIcon, path: "/services/dye-sublimation", title: "Dye Sublimation" },
    { image: DirectTransferIcon, path: "/services/dtg-dtf", title: "Direct Transfer" }
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
                            <Button as={Link} to={service.path} fluid className="services-card-btn">LEARN MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurServices;