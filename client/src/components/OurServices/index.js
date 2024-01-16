import React from "react";
import { Card, Header, Image, Button, Icon } from "semantic-ui-react";

import "./style.css";

const services = [
    { image: "", title: "", description: "" },
    { image: "", title: "", description: "" },
    { image: "", title: "", description: "" },
    { image: "", title: "", description: "" },
    { image: "", title: "", description: "" }
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