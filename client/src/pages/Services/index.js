import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import OurServices from "../../components/OurServices";

const Services = () => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/services" ? <OurServices /> : null}
        </>
    );
}

export default Services;