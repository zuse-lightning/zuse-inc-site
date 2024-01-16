import React from "react";
import { Header, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ScreenPrintingIcon from "../../assets/images/screen-printing-red.png";
import EmbroideryIcon from "../../assets/images/embroidery-red.png";
import PromoItemsIcon from "../../assets/images/promo-items-red.png";
import FulfillmentIcon from "../../assets/images/fulfillment-red.png";
import WebStoreIcon from "../../assets/images/web-stores-red.png";

import "./style.css";

const services = [
    { image: ScreenPrintingIcon, path: "/services", title: "Screen Printing", description: "We sure do print screens." },
    { image: EmbroideryIcon, path: "/services", title: "Embroidery", description: "We embroider a lot of things." },
    { image: PromoItemsIcon, path: "/services", title: "Promo Items", description: "Need promo items? We GOT promo items? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, molestiae. Voluptas optio, harum dolorem laudantium minus deleniti placeat vel cupiditate quaerat doloremque reiciendis ullam facilis recusandae numquam temporibus voluptate sint." },
    { image: FulfillmentIcon, path: "/services", title: "Fulfillment", description: "We fulfill a lot of packages 'n stuff." },
    { image: WebStoreIcon, path: "/services", title: "Web Stores", description: "We build Shopify stores to sell your products." }
];

const OurServices = () => {
    return (
        <div id="our-services-container">
            <Header as="h1" id="our-services-header">Our Services</Header>
            <div id="services-container">
                {services.map((service, index) => (
                    <div className="services-col" key={index}>
                        <div  className="services-card">
                            <Image className="services-card-image" src={service.image} />
                            <div className="services-card-header">{service.title}</div>
                            <div className="services-card-description">{service.description}</div>
                            <Button as={Link} to={service.path} fluid className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurServices;