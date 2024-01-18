import React from "react";
import { Image, Header } from "semantic-ui-react";
import Sanmar from "../../assets/images/catalogs/sanmar.png";
import SSActivewear from "../../assets/images/catalogs/ssactivewear.webp";
import AlphaBroder from "../../assets/images/catalogs/alphabroder.webp";
import AugustaSportswear from "../../assets/images/catalogs/augusta-sportswear.png";
import Rothco from "../../assets/images/catalogs/rothco.png";

import "./style.css";

const TopCatalogs = () => {

    const catalogs = [
        Sanmar, 
        SSActivewear, AlphaBroder, AugustaSportswear, Rothco];

    return (
        <div id="top-catalogs-container">
            <Header id="top-catalogs-header" as="h1">Our Top Catalogs</Header>
            <div id="catalogs-container">
                {catalogs.map((catalog, index) => (
                    <div className="catalog-col" key={index}>
                        <Image className="catalog-img" src={catalog} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopCatalogs;