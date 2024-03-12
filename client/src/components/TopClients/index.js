import React from "react";
import { Header, Image } from "semantic-ui-react";
import Adidas from "../../assets/images/clients/adidas.png";
import Brand47 from "../../assets/images/clients/47-brand.png";
import Dunkin from "../../assets/images/clients/dunkin.png";
import Fanatics from "../../assets/images/clients/fanatics.png";
import Lego from "../../assets/images/clients/lego.png";
import MLB from "../../assets/images/clients/mlb.png";
import NBA from "../../assets/images/clients/nba.png";
import NCAA from "../../assets/images/clients/ncaa.png";
import NFL from "../../assets/images/clients/nfl.png";
import Nike from "../../assets/images/clients/nike.png";

import "./style.css";

const clients = [Fanatics, NFL, MLB, Brand47, NCAA, Lego, Dunkin, Nike, NBA, Adidas];

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