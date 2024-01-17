import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import OurServices from "../../components/OurServices";

const Services = () => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/services" ? <OurServices /> : null}
            <Routes>
                <Route exact path="/services/screenprinting" />
                <Route exact path="/services/embroidery" />
                <Route exact path="/services/promo" />
                <Route exact path="/services/screenprinting" />
                <Route exact path="/services/screenprinting" />
            </Routes>
        </>
    );
}

export default Services;