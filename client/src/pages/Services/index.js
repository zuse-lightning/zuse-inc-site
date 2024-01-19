import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import OurServices from "../../components/OurServices";
import ServiceScreenPrinting from "./ServiceScreenPrinting";
import ServiceEmbroidery from "./ServiceEmbroidery";
import ServicePromoItems from "./ServicePromoItems";

const Services = () => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="screenprinting" element={<ServiceScreenPrinting />} />
                <Route exact path="embroidery" element={<ServiceEmbroidery />} />
                <Route exact path="promo-items" element={<ServicePromoItems />} />
                <Route exact path="fulfillment" />
                <Route exact path="shopify-stores" />
            </Routes>
        </>
    );
}

export default Services;