import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
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
import SEO from "../../components/SEO";

const Services = (props) => {

    const { screenWidth, location } = props;
    const { pathname } = useLocation();

    return (
        <>
            <SEO 
                location={location}
                title="Services"
                description="We offer 10 main services, Screen Printing, Embroidery, Promotional Items, Fulfillment, E-Commerce, Graphic Design, Print On-Demand, Sewing, Dye Sublimation, and Direct Transfer."
                keywords="Services, Branford, New Haven, CT, Screen Printing, Embroidery, Banners, Fulfillment, Promotional Items, Shopify Web Stores, Decals, Custom Apparel"
                type="website"
                image="https://zuse-inc-bucket.s3.amazonaws.com/Zuse-Services.png"
                url="https://www.zuse.com/services"
            />
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="screenprinting" element={<ServiceScreenPrinting location={location} screenWidth={screenWidth} />} />
                <Route exact path="embroidery" element={<ServiceEmbroidery location={location} screenWidth={screenWidth} />} />
                <Route exact path="promo-items" element={<ServicePromoItems location={location} screenWidth={screenWidth} />} />
                <Route exact path="fulfillment" element={<ServiceFulfillment location={location} screenWidth={screenWidth} />} />
                <Route exact path="ecommerce" element={<ServiceShopifyStore location={location} screenWidth={screenWidth} />} />
                <Route exact path="graphic-design" element={<ServiceGraphicDesign location={location} screenWidth={screenWidth} />} />
                <Route exact path="dtg-dtf" element={<ServiceDirectTransfer location={location} screenWidth={screenWidth} />} />
                <Route exact path="print-on-demand" element={<ServiceOnDemand location={location} screenWidth={screenWidth} />} />
                <Route exact path="dye-sublimation" element={<ServiceDyeSub location={location} screenWidth={screenWidth} />} />
                <Route exact path="sewing" element={<ServiceSewing location={location} screenWidth={screenWidth} />} />
            </Routes>
        </>
    );
}

export default Services;