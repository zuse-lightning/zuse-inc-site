import React from "react";
import { Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Sanmar from "../../assets/images/catalogs/sanmar.png";
import SSActivewear from "../../assets/images/catalogs/ssactivewear.webp";
import AlphaBroder from "../../assets/images/catalogs/alphabroder.webp";
import AugustaSportswear from "../../assets/images/catalogs/augusta-sportswear.png";
import Rothco from "../../assets/images/catalogs/rothco.png";

import "./style.css";

const TopCatalogs = (props) => {

    const { pathname } = props;

    const catalogs = [
        { id: "sanmar", image: Sanmar, link: "/catalogs/sanmar" },
        { id: "ssactivewear", image: SSActivewear, link: "/catalogs/ssactivewear" },
        { id: "alphabroder", image: AlphaBroder, link: "/catalogs/alphabroder" },
        { id: "augusta-sportswear", image: AugustaSportswear, link: "/catalogs/augusta-sportswear" },
        { id: "rothco", image: Rothco, link: "/catalogs/rothco" }
    ];

    return (
        <div id="top-catalogs-container">
            {pathname !== "/catalogs" ? <Header id="top-catalogs-header" as="h1">Our Top Catalogs</Header> : null}
            <div id="catalogs-container">
                {catalogs.map((catalog, index) => (
                    <div className="catalog-col" key={index}>
                        <Image as={Link} to={catalog.link} className="catalog-img" id={catalog.id} src={catalog.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopCatalogs;