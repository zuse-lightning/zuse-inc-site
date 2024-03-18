import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"
import OurServices from "../../components/OurServices";
import ServiceScreenPrinting from "./ServiceScreenPrinting";
import ServiceEmbroidery from "./ServiceEmbroidery";
import ServicePromoItems from "./ServicePromoItems";
import ServiceFulfillment from "./ServiceFulfillment";
import ServiceShopifyStore from "./ServiceShopifyStore";
import ServiceGraphicDesign from "./ServiceGraphicDesign";
import ServiceOnDemand from "./ServiceOnDemand";
import ServiceSewing from "./ServiceSewing";
import ServiceDyeSub from "./ServiceDyeSub";
import ServiceDirectTransfer from "./ServiceDirectTransfer";

const Services = (props) => {

    const { screenWidth, location } = props;
    const { pathname } = useLocation();

    return (
        <>
            <Helmet>
                <title>Zuse Inc. - Services</title>
                <meta name="description" content="We offer 5 main services, Screen Printing, Embroidery, Promotional Items, Fulfillment, and Shopify Stores." />
                <meta name="keywords" content="Services, Branford, New Haven, CT, Screen Printing, Embroidery, Banners, Fulfillment, Promotional Items, Shopify Web Stores, Decals, Custom Apparel" />
                <meta name="robots" content="index, follow" />
            </Helmet>
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="screenprinting" element={<ServiceScreenPrinting screenWidth={screenWidth} />} />
                <Route exact path="embroidery" element={<ServiceEmbroidery screenWidth={screenWidth} />} />
                <Route exact path="promo-items" element={<ServicePromoItems location={location} screenWidth={screenWidth} />} />
                <Route exact path="fulfillment" element={<ServiceFulfillment screenWidth={screenWidth} />} />
                <Route exact path="ecommerce" element={<ServiceShopifyStore screenWidth={screenWidth} />} />
                <Route exact path="graphic-design" element={<ServiceGraphicDesign screenWidth={screenWidth} />} />
                <Route exact path="dtg-dtf" element={<ServiceDirectTransfer screenWidth={screenWidth} />} />
                <Route exact path="print-on-demand" element={<ServiceOnDemand screenWidth={screenWidth} />} />
                <Route exact path="dye-sublimation" element={<ServiceDyeSub screenWidth={screenWidth} />} />
                <Route exact path="sewing" element={<ServiceSewing screenWidth={screenWidth} />} />
            </Routes>
        </>
    );
}

export default Services;