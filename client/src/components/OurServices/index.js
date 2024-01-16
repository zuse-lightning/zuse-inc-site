import React from "react";
import { Card, Header, Image, Button, Icon } from "semantic-ui-react";
import ScreenPrintingIcon from "../../assets/images/screen-printing-red.png";
import EmbroideryIcon from "../../assets/images/embroidery-red.png";
import PromoItemsIcon from "../../assets/images/promo-items-red.png";
import FulfillmentIcon from "../../assets/images/fulfillment-red.png";
import WebStoreIcon from "../../assets/images/web-stores-red.png";

import "./style.css";

const services = [
    { image: ScreenPrintingIcon, title: "Screen Printing", description: "We sure do print screens." },
    { image: EmbroideryIcon, title: "Embroidery", description: "We embroider a lot of things." },
    { image: PromoItemsIcon, title: "Promo Items", description: "Need promo items? We GOT promo items?" },
    { image: FulfillmentIcon, title: "Fulfillment", description: "" },
    { image: WebStoreIcon, title: "Web Stores", description: "" }
];

const OurServices = () => {
    return (
        <div id="our-services-container">
            <Header as="h1" id="our-services-header">Our Services</Header>
            <div id="services-container">
                {services.map((service, index) => (
                    <div className="services-col">
                        <Card className="services-card">
                            <Image className="services-card-image" src={service[index].image} />
                            <Card.Header className="services-card-header">{service[index].title}</Card.Header>
                            <Card.Description className="services-card-description">{service[index].description}</Card.Description>
                            <Button className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                        </Card>
                    </div>
                ))}

                {/* <div className="services-col">
                    <Card className="services-card">
                        <Image className="services-card-image" src="#" />
                        <Card.Header className="services-card-header"></Card.Header>
                        <Card.Description className="services-card-description">

                        </Card.Description>
                        <Button className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                    </Card>
                </div>
                <div className="services-col">
                    <Card className="services-card">
                        <Image className="services-card-image" src="#" />
                        <Card.Header className="services-card-header"></Card.Header>
                        <Card.Description className="services-card-description">

                        </Card.Description>
                        <Button className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                    </Card>
                </div>
                <div className="services-col">
                    <Card className="services-card">
                        <Image className="services-card-image" src="#" />
                        <Card.Header className="services-card-header"></Card.Header>
                        <Card.Description className="services-card-description">

                        </Card.Description>
                        <Button className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                    </Card>
                </div>
                <div className="services-col">
                    <Card className="services-card">
                        <Image className="services-card-image" src="#" />
                        <Card.Header className="services-card-header"></Card.Header>
                        <Card.Description className="services-card-description">

                        </Card.Description>
                        <Button className="services-card-btn">MORE <Icon className="services-card-icon" name="arrow right" /></Button>
                    </Card>
                </div> */}
            </div>
        </div>
    );
}

export default OurServices;