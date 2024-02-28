import React from "react";
import { Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Sanmar from "../../assets/images/catalogs/sanmar.png";
import SSActivewear from "../../assets/images/catalogs/ssactivewear.webp";
import Gemline from "../../assets/images/catalogs/gemline.png";
import AugustaSportswear from "../../assets/images/catalogs/augusta-sportswear.png";
import Rothco from "../../assets/images/catalogs/rothco.png";
import CharlesRiver from "../../assets/images/catalogs/charles-river.png";
import CitadelBrands from "../../assets/images/catalogs/citadel-brands.jpg";
import CutterBuck from "../../assets/images/catalogs/cutter-buck.png";
import Stormtech from "../../assets/images/catalogs/stormtech-blue.png";
import Edwards from "../../assets/images/catalogs/edwards.png";

import "./style.css";

const TopCatalogs = (props) => {

    const { pathname } = props;

    const catalogs = [
        { id: "sanmar", image: Sanmar, link: "https://sanmar.com/" },
        { id: "ssactivewear", image: SSActivewear, link: "https://www.ssactivewear.com/" },
        { id: "gemline", image: Gemline, link: "https://gemline.com/s/" },
        { id: "augusta-sportswear", image: AugustaSportswear, link: "https://www.augustasportswear.com/" },
        { id: "rothco", image: Rothco, link: "https://www.rothco.com/" },
        { id: "charles-river", image: CharlesRiver, link: "https://www.charlesriverapparel.com/" },
        { id: "citadel-brands", image: CitadelBrands, link: "https://www.citadelbrands.com/home_page" },
        { id: "cutter-buck", image: CutterBuck, link: "https://cutterbuck.com/" },
        { id: "stormtech", image: Stormtech, link: "https://www.stormtechusa.com/" },
        { id: "edwards", image: Edwards, link: "https://www.edwardsgarment.com/"}
    ];

    return (
        <div id="top-catalogs-container">
            {pathname !== "/catalogs" ? <Header id="top-catalogs-header" as="h1">Our Top Catalogs</Header> : null}
            <div id="catalogs-container">
                {catalogs.map((catalog, index) => (
                    <div className="catalog-col" key={index}>
                        <Image as={Link} target=":blank" to={catalog.link} className="catalog-img" id={catalog.id} src={catalog.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopCatalogs;