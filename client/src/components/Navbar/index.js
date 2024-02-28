import React, { useState, useEffect } from "react";
import AnnouncementBar from "../AnnouncementBar";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import "./style.css";

const Navbar = (props) => {

    const { screenWidth, screenHeight } = props;
    // const [stickyClass, setStickyClass] = useState("");

    // useEffect(() => {
    //     window.addEventListener("scroll", stickNavbar);
    //     return () => {
    //         window.removeEventListener("scroll", stickNavbar);
    //     }
    // }, []);

    // const stickNavbar = () => {
    //     if (window !== undefined) {
    //         let windowHeight = window.scrollY;
    //         windowHeight > 0.25 * screenHeight ? setStickyClass("sticky") : setStickyClass("");
    //     }
    // }

    const catalogs = [
        { name: "SanMar", link: "https://sanmar.com/" },
        { name: "S&S Activewear", link: "https://www.ssactivewear.com/" },
        { name: "Gemline", link: "https://gemline.com/s/" },
        { name: "Augusta Sportswear", link: "https://www.augustasportswear.com/" },
        { name: "Rothco", link: "https://www.rothco.com/" },
        { name: "Charles River Apparel", link: "https://www.charlesriverapparel.com/" },
        { name: "Citadel Brands", link: "https://www.citadelbrands.com/home_page" },
        { name: "Cutter and Buck", link: "https://cutterbuck.com/" },
        { name: "Stormtech USA", link: "https://www.stormtechusa.com/" },
        { name: "Edwards Garment", link: "https://www.edwardsgarment.com/" }
    ];
    
    const services = [
        { name: "Screen Printing", link: "/services/screenprinting" },
        { name: "Embroidery", link: "/services/embroidery" },
        { name: "Promotional Items", link: "/services/promo-items" },
        { name: "Fulfillment", link: "/services/fulfillment" },
        { name: "Shopify Stores", link: "/services/shopify-stores" }
    ];

    return (
        <>
            <div className={`header-container`}>
                {screenWidth >= 768 ? <AnnouncementBar /> : null}
                { screenWidth >= 992 ? <DesktopNavbar catalogs={catalogs} services={services} /> : <MobileNavbar screenWidth={screenWidth} /> }
            </div>
        </>
    );
};

export default Navbar;