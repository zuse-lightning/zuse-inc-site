import React from "react";
import { Header, Image } from "semantic-ui-react";

import "./style.css";

const clients = [
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/fanatics.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/nfl.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/mlb.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/47-brand.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/ncaa.png", 
    // "https://zuse-inc-bucket.s3.amazonaws.com/clients/lego.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/dunkin.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/nike.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/nba.png", 
    "https://zuse-inc-bucket.s3.amazonaws.com/clients/adidas.png"
];

const TopClients = (props) => {
    return (
        <div id="top-clients-container">
            <Header id="top-clients-header" as="h1">Our Top Clients</Header>
            <div id="clients-container">
                {clients.map((client, index) => (
                    <div className="clients-col" key={index}>
                        <Image className="clients-img" draggable="false" src={client} />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default TopClients;