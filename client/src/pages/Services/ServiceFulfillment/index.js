import React from "react";
import { Header, Image, List, Icon } from "semantic-ui-react";
import FulfillmentTemp from "../../../assets/images/fulfillment-banner.png";
import PageContactFooter from "../../../components/PageContactFooter";

import "./style.css";

const ServiceFulfillment = () => {
    return (
        <div id="fulfillment-container">
            <Header as="h1" id="fulfillment-header">Fulfillment</Header>
            <Image src={FulfillmentTemp} />
            <br />
            <Header as="h2" className="fulfillment-subheader">How It Works</Header>
            <br />
            <p className="fulfillment-text">
                At Zuse Inc., we streamline your operations with our comprehensive fulfillment 
                services. From order processing to shipping, we handle it all, ensuring your 
                products reach customers efficiently and on time. Focus on growing your business 
                while we take care of the logistics. We prioritize precision in order processing 
                and shipping. Our systems are confirmed online, providing you with real-time updates 
                and tracking options through your preferred carrier and delivery method. Daily pick-up 
                and delivery services are available from reputable carriers such as Federal Express, UPS, 
                and the US Postal Service. 
            </p>
            <br />
            <List id="fulfillment-list">
                <List.Header id="fulfillment-list-header">Here Are Our Fulfillment Services:</List.Header>
                <List.Item className="fulfillment-list-item">
                    <List.Description className="fulfillment-list-description">
                        <List.Icon name="check" className="fulfillment-list-icon" />
                        Assembly – Let us handle the intricacies of assembling your products.</List.Description>
                </List.Item>
                <List.Item className="fulfillment-list-item">
                    <List.Description className="fulfillment-list-description">
                        <List.Icon name="check" className="fulfillment-list-icon" />
                        Tagging – Ensure each item is appropriately tagged for easy identification.</List.Description>
                </List.Item>
                <List.Item className="fulfillment-list-item">
                    <List.Description className="fulfillment-list-description">
                        <List.Icon name="check" className="fulfillment-list-icon" />
                        Wrapping – We add a finishing touch with professional wrapping services.</List.Description>
                </List.Item>
                <List.Item className="fulfillment-list-item">
                    <List.Description className="fulfillment-list-description">
                        <List.Icon name="check" className="fulfillment-list-icon" />
                        Packaging – From bulk packaging to customized kits, we tailor packaging to your specifications.</List.Description>
                </List.Item>
                <List.Item className="fulfillment-list-item">
                    <List.Description className="fulfillment-list-description">
                        <List.Icon name="check" className="fulfillment-list-icon" />
                        Freight Management – Our expertise extends to managing freight, ensuring smooth transportation of your products.</List.Description>
                </List.Item>
            </List>
            <br />
            <p className="fulfillment-text">
                We’ll focus on growing your business while we take care of the logistics. Trust us to handle 
                every step, from assembly to shipping, so your products reach your customers efficiently and 
                on time.
            </p>
            <PageContactFooter />
        </div>
    );
};

export default ServiceFulfillment;