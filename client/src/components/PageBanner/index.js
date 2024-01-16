import React from "react";
import { Header, Breadcrumb } from "semantic-ui-react";
import ScreenTextless from "../../assets/images/screen-printing-banner-textless.png";
import EmbroidTextless from "../../assets/images/embroidery-banner-textless.png";
import FulfillTextless from "../../assets/images/fulfillment-banner-textless.png";
import MainTextless from "../../assets/images/main-banner-textless.png";
import CodingBackground from "../../assets/images/coding-backgroun.jpeg";

import "./style.css";

const pageData = [
    { id: 1, image: ScreenTextless, name: "Screen Printing" },
    { id: 2, image: EmbroidTextless, name: "Embroidery" },
    { id: 3, image: FulfillTextless, name: "Fulfillment" },
    { id: 4, image: MainTextless, name: "Promotional Items" },
    { id: 5, image: CodingBackground, name: "Shopify Stores" }
];

const PageBanner = (props) => {
    return (
        <div id="page-banner">
            <div className="page-banner-col">
                <Header as="h2" id=""></Header>
            </div>
            <div className="page-banner-col">
                <Breadcrumb>
                    <Breadcrumb.Section link>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Store</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                </Breadcrumb>
            </div>
        </div>
    );
}

export default PageBanner;