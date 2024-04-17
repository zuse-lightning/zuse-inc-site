import React, { useState, useEffect } from "react";
import AnnouncementBar from "../AnnouncementBar";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

import "./style.css";

const Navbar = (props) => {

    const { screenWidth, screenHeight, location, whichWebsite } = props;
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
        { name: "E-Commerce", link: "/services/ecommerce" },
        { name: "Graphic Design", link: "/services/graphic-design" },
        { name: "Print On-Demand", link: "/services/print-on-demand" },
        { name: "Sewing", link: "/services/sewing" },
        { name: "Dye Sublimation", link: "/services/dye-sublimation" },
        { name: "Direct Transfer", link: "/services/dtg-dtf" }
    ];

    return (
        <>
            <div className={`header-container`}>
                <AnnouncementBar screenWidth={screenWidth} />
                { screenWidth >= 992 ? 
                    <DesktopNavbar 
                        location={location} 
                        catalogs={catalogs} 
                        services={services}
                        whichWebsite={whichWebsite}
                    /> : 
                    <MobileNavbar 
                        location={location} 
                        screenWidth={screenWidth}
                        whichWebsite={whichWebsite} 
                    /> }
            </div>
        </>
    );
};

export default Navbar;