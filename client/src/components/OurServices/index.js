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
    { image: ScreenPrintingIcon, path: "/services", title: "Screen Printing", description: "From sleek hoodies to casual tees, our expertise in screen printing ensures that your brand stands out with high-quality prints that capture attention and leave a lasting impression." },
    { image: EmbroideryIcon, path: "/services", title: "Embroidery", description: "Our precision embroidery services add a touch of sophistication to your apparel, hats, and accessories. The result? A polished finish that not only stands out visually but also adds a touch of elegance to every stitch" },
    { image: PromoItemsIcon, path: "/services", title: "Promotional Items", description: "Need Boost brand visibility with our extensive range of promotional items. From branded merchandise to unique giveaways, we help you create memorable experiences for your audience. Maximize your marketing impact with customized promotional products that leave a lasting impression." },
    { image: FulfillmentIcon, path: "/services", title: "Fulfillment Services", description: "Streamline your operations with our comprehensive fulfillment services. From order processing to shipping, we handle it all, ensuring your products reach customers efficiently and on time. Focus on growing your business while we take care of the logistics." },
    { image: WebStoreIcon, path: "/services", title: "Shopify Store", description: "Take your business online with our Shopify store creation services. We design and develop an e-commerce platform tailored to your brand, providing a seamless and secure shopping experience for your customers. Elevate your potential of online sales with a professionally crafted Shopify store." }
];

const OurServices = () => {
    return (
        <div id="our-services-container">
            <Header as="h1" id="our-services-header">Our Services</Header>
            <div id="services-container">
                {services.map((service, index) => (
                    <div className="services-col" key={index}>
                        <div className="services-card">
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