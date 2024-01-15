import React from "react";
import { Image } from "semantic-ui-react";

const clients = [];

const TopClients = (props) => {
    return (
        <div id="top-clients-container">
            {clients.map((client, index) => (
                <div className="clients-col" key={index}>
                    <Image src={client} />
                </div>
            ))}
        </div>
    );
}

export default TopClients;