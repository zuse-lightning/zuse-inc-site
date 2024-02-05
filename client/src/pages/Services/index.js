import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import OurServices from "../../components/OurServices";
import ServiceScreenPrinting from "./ServiceScreenPrinting";
import ServiceEmbroidery from "./ServiceEmbroidery";
import ServicePromoItems from "./ServicePromoItems";
import ServiceFulfillment from "./ServiceFulfillment";
import ServiceShopifyStore from "./ServiceShopifyStore";

const Services = (props) => {

    const { screenWidth } = props;
    const { pathname } = useLocation();

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Services</title>
                <meta name="description" content="We offer 5 main services, Screen Printing, Embroidery, Promotional Items, Fulfillment, and Shopify Stores." />
                <meta name="keywords" content="Services, Branford, New Haven, CT, Screen Printing, Embroidery, Banners, Fulfillment, Promotional Items, Shopify Web Stores, Decals, Custom Apparel" />
            </Helmet>
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="screenprinting" element={<ServiceScreenPrinting screenWidth={screenWidth} />} />
                <Route exact path="embroidery" element={<ServiceEmbroidery screenWidth={screenWidth} />} />
                <Route exact path="promo-items" element={<ServicePromoItems screenWidth={screenWidth} />} />
                <Route exact path="fulfillment" element={<ServiceFulfillment screenWidth={screenWidth} />} />
                <Route exact path="shopify-stores" element={<ServiceShopifyStore screenWidth={screenWidth} />} />
            </Routes>
        </>
    );
}

export default Services;