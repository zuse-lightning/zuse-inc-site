import React from "react";
import { Header, Image } from "semantic-ui-react";
import Box from "../../assets/proxy/trust-badge-box.png";
import Message from "../../assets/proxy/trust-badge-message.png";
import Quality from "../../assets/proxy/trust-badge-quality.png";

import "./style.css";

const HomeTrustBadges = () => {
    return (
        <div id="home-trust-badges-container">
            <div id="trust-badges-container">
                <div className="trust-badge-col">
                    <Image className="trust-badge-image" src={Box} />
                    <Header className="trust-badge-title" as="h3">EXCELLENT CUSTOMER SERVICE</Header>
                    <Header className="trust-badge-text" as="h5">We're here for you 24/7! Got questions? We got answers!</Header>
                </div>
                <div className="trust-badge-col">
                    <Image className="trust-badge-image" src={Message} />
                    <Header className="trust-badge-title" as="h3">FREE SHIPPING OVER $100</Header>
                    <Header className="trust-badge-text" as="h5">Guaranteed! Go ahead add that extra polo to the cart!</Header>
                </div>
                <div className="trust-badge-col">
                    <Image className="trust-badge-image" src={Quality} />
                    <Header className="trust-badge-title" as="h3">PREMIUM QUALITY</Header>
                    <Header className="trust-badge-text" as="h5">Apparel and accesories of the utmost quality-standard!</Header>
                </div>
            </div>
        </div>
    );
}

export default HomeTrustBadges;