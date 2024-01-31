import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import "./style.css";

const Navbar = (props) => {

    const { screenWidth } = props;

    return (
        <>
            { screenWidth >= 992 ? <DesktopNavbar /> : <MobileNavbar screenWidth={screenWidth} /> }
        </>
    );
};

export default Navbar;