import React from "react";
import { Sidebar, SidebarPushable, SidebarPusher } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ZuseLogo from "../../assets/images/zuse-logo.jpg";

import "./style.css";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = (props) => {

    const { screenWidth } = props;

    return (
        <>
            { screenWidth >= 992 ? <DesktopNavbar /> : <MobileNavbar /> }
        </>
    );
};

export default Navbar;