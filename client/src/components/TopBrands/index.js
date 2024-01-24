import React, { useLocation } from "react";
import { Header, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Gildan from "../../assets/images/catalogs/sanmar/Gildan-Logo.png";
import BrooksBrothers from "../../assets/images/catalogs/sanmar/Brooks-Brothers-Logo.png";
import SportTek from "../../assets/images/catalogs/sanmar/Sport-Tek-Logo.png";
import MercerMettle from "../../assets/images/catalogs/sanmar/MercerMettle-Logo.png";
import Nike from "../../assets/images/clients/nike.png";

import "./style.css";



const TopBrands = (props) => {

    const { pathname } = useLocation();

    let brandImages;
    let brandLinks;

    switch (pathname) {
        case "/catalogs/sanmar":
            brandImages = [Gildan, BrooksBrothers, SportTek, MercerMettle, Nike];
            brandLinks = [
                "https://sanmar.com/Brands/Gildan/c/bra-gildan",
                "https://sanmar.com/Brands/Brooks-Brothers/c/bra-brooksbrothers",
                "https://sanmar.com/Brands/Sport-Tek/c/bra-sporttek",
                "https://sanmar.com/Brands/MERCER%2BMETTLE/c/bra-mercermettle",
                "https://sanmar.com/Brands/Nike/c/bra-nikegolf"
            ];
            break;
        case "/catalogs/ssactivewear":
            brandImages = [];
            brandLinks = [

            ];
            break;
        case "/catalogs/alphabroder":
            brandImages = [];
            brandLinks = [

            ];
            break;
        case "/catalogs/augusta-sportswear":
            brandImages = [];
            brandLinks = [

            ];
            break;
        case "/catalogs/rothco":
            brandImages = [];
            brandLinks = [

            ];
            break;
        default:
            brandImages = [];
            brandLinks = [];
    }

    return (
        <div id="top-brands-container">
            <Header id="top-brands-header" as="h1">Top Brands</Header>
            <div id="brands-container">
                {brands.map((brand, index) => (
                    <div className="brand-col" key={index}>
                        <Image as={Link} to={brand.link} className="brand-img" id={brand.id} src={brand.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}