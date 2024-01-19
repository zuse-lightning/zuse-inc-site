import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import OurServices from "../../components/OurServices";
import ServiceScreenPrinting from "./ServiceScreenPrinting";

const Services = () => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="screenprinting" element={<ServiceScreenPrinting pathname={pathname} />} />
                <Route exact path="embroidery" />
                <Route exact path="promo-items" />
                <Route exact path="fulfillment" />
                <Route exact path="shopify-stores" />
            </Routes>
        </>
    );
}

export default Services;