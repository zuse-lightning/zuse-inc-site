import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import OurServices from "../../components/OurServices";
import ServiceScreenPrinting from "./ServiceScreenPrinting";
import ServiceEmbroidery from "./ServiceEmbroidery";
import ServicePromoItems from "./ServicePromoItems";
import ServiceFulfillment from "./ServiceFulfillment";
import ServiceShopifyStore from "./ServiceShopifyStore";

const Services = () => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="screenprinting" element={<ServiceScreenPrinting />} />
                <Route exact path="embroidery" element={<ServiceEmbroidery />} />
                <Route exact path="promo-items" element={<ServicePromoItems />} />
                <Route exact path="fulfillment" element={<ServiceFulfillment />} />
                <Route exact path="shopify-stores" element={<ServiceShopifyStore />} />
            </Routes>
        </>
    );
}

export default Services;