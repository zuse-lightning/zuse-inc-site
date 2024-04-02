import React from "react";
import { Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./style.css";

const TopCatalogs = (props) => {

    const { pathname } = props;

    const catalogs = [
        { id: "sanmar", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/sanmar.png", link: "https://sanmar.com/" },
        { id: "ssactivewear", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/ssactivewear.webp", link: "https://www.ssactivewear.com/" },
        { id: "gemline", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/gemline.png", link: "https://gemline.com/s/" },
        { id: "augusta-sportswear", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/augusta-sportswear.png", link: "https://www.augustasportswear.com/" },
        { id: "rothco", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/rothco.png", link: "https://www.rothco.com/" },
        { id: "charles-river", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/charles-river.png", link: "https://www.charlesriverapparel.com/" },
        { id: "citadel-brands", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/citadel-brands.jpg", link: "https://www.citadelbrands.com/home_page" },
        { id: "cutter-buck", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/cutter-buck.png", link: "https://cutterbuck.com/" },
        { id: "stormtech", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/stormtech-blue.png", link: "https://www.stormtechusa.com/" },
        { id: "edwards", image: "https://zuse-inc-bucket.s3.amazonaws.com/catalogs/edwards.png", link: "https://www.edwardsgarment.com/"}
    ];

    return (
        <div id="top-catalogs-container">
            {pathname !== "/catalogs" ? <Header id="top-catalogs-header" as="h1">Our Top Catalogs</Header> : null}
            <div id="catalogs-container">
                {catalogs.map((catalog, index) => (
                    <div className="catalog-col" key={index}>
                        <Image as={Link} target=":blank" to={catalog.link} draggable="false" className="catalog-img" id={catalog.id} src={catalog.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopCatalogs;