import React from "react";
import { Header, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";

const services = [
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/screen-printing-blue.png", path: "/services/screenprinting", title: "Screen Printing" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/embroidery-blue.png", path: "/services/embroidery", title: "Embroidery" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/promo-items-blue.png", path: "/services/promo-items", title: "Promotional Items" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/fulfillment-blue.png", path: "/services/fulfillment", title: "Fulfillment Services" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/web-stores-blue.png", path: "/services/ecommerce", title: "E-Commerce" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/graphic-design-blue.png", path: "/services/graphic-design", title: "Graphic Design" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/print-on-demand-blue.png", path: "/services/print-on-demand", title: "Print On-Demand" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/sewing-blue.png", path: "/services/sewing", title: "Sewing" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/dye-sublimation-blue.png", path: "/services/dye-sublimation", title: "Dye Sublimation" },
    { image: "https://zuse-inc-bucket.s3.amazonaws.com/dtg-dtf-blue.png", path: "/services/dtg-dtf", title: "Direct Transfer" }
];

const OurServices = () => {
    
    const { pathname } = useLocation();
    
    return (
        <div id="our-services-container">
            {pathname !== "/services" ? <Header as="h1" id="our-services-header">Our Services</Header> : null}
            <div id="services-container">
                {services.map((service, index) => (
                    <div className="services-col" key={index}>
                        <div className="services-card">
                            <Image className="services-card-image" draggable="false" src={service.image} />
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