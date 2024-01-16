import React from "react";
import { Header, Breadcrumb } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import ScreenTextless from "../../assets/images/screen-printing-banner-textless.png";
import EmbroidTextless from "../../assets/images/embroidery-banner-textless.png";
import FulfillTextless from "../../assets/images/fulfillment-banner-textless.png";
import MainTextless from "../../assets/images/main-banner-textless.png";
import CodingBackground from "../../assets/images/coding-background.jpeg";

import "./style.css";

const pageData = [
    { id: 1, image: ScreenTextless, name: "Screen Printing" },
    { id: 2, image: EmbroidTextless, name: "Embroidery" },
    { id: 3, image: FulfillTextless, name: "Fulfillment" },
    { id: 4, image: MainTextless, name: "Promotional Items" },
    { id: 5, image: CodingBackground, name: "Shopify Stores" }
];

const PageBanner = (props) => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname !== "/" ? <div id="page-banner">
                <div className="page-banner-col">
                    <Header as="h2" id="page-banner-title">ABOUT</Header>
                </div>
                <div className="page-banner-col">
                    <Breadcrumb>
                        <Breadcrumb.Section className="breadcrumb-link" link>HOME</Breadcrumb.Section>
                        <Breadcrumb.Divider className="breadcrumb-link-divider" />
                        <Breadcrumb.Section className="breadcrumb-link" link>SERVICES</Breadcrumb.Section>
                        <Breadcrumb.Divider className="breadcrumb-link-divider" />
                        <Breadcrumb.Section className="breadcrumb-link" active>SCREEN PRINTING</Breadcrumb.Section>
                    </Breadcrumb>
                </div>
            </div> : null}
        </>
    );
}

export default PageBanner;