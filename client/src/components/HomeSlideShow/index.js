import React, { useState, useEffect, useRef } from "react";
import { Image } from "semantic-ui-react";
import MainBanner from "../../assets/images/banners/new-main-banner.png";
import Fulfillment from "../../assets/images/banners/fulfillment-banner.png";
import ScreenPrinting from "../../assets/images/banners/screenprinting-banner.png";
import Embroidery from "../../assets/images/banners/embroidery-banner.png";
import Ecommerce from "../../assets/images/banners/ecommerce-banner.png";
import GraphicDesign from "../../assets/images/banners/graphic-design-banner.png";
import PrintOnDemand from "../../assets/images/banners/print-on-demand-banner.png";
import DirectTransfer from "../../assets/images/banners/dtg-dtf-banner.png";
import DyeSub from "../../assets/images/banners/dye-sub-banner.png";
import Sewing from "../../assets/images/banners/sewing-banner.png";
import MainBannerMobile from "../../assets/images/banners/new-main-banner-mobile.png";
import FulfillmentMobile from "../../assets/images/banners/fulfillment-mobile-banner.png";
import ScreenPrintingMobile from "../../assets/images/banners/screenprinting-mobile-banner.png";
import EmbroideryMobile from "../../assets/images/banners/embroidery-mobile-banner.png";
import EcommerceMobile from "../../assets/images/banners/ecommerce-banner-mobile.png";
import GraphicDesignMobile from "../../assets/images/banners/graphic-design-banner-mobile.png";
import PrintOnDemandMobile from "../../assets/images/banners/print-on-demand-banner-mobile.png";
import DirectTransferMobile from "../../assets/images/banners/dtg-dtf-banner-mobile.png";
import DyeSubMobile from "../../assets/images/banners/dye-sub-banner-mobile.png";
import SewingMobile from "../../assets/images/banners/sewing-banner-mobile.png";
import ACPDirectTransfer from "../../assets/images/banners/ACP-DTG-DTF.png";
import ACPDirectTransferMobile from "../../assets/images/banners/ACP-DTG-DTF-Mobile.png";
import ACPDyeSub from "../../assets/images/banners/ACP-Dye-Sub.png";
import ACPDyeSubMobile from "../../assets/images/banners/ACP-Dye-Sub-Mobile.png";
import ACPEcommerce from "../../assets/images/banners/ACP-Ecommerce.png";
import ACPEcommerceMobile from "../../assets/images/banners/ACP-Ecommerce-Mobile.png";
import ACPEmbroidery from "../../assets/images/banners/ACP-Embroidery.png";
import ACPEmbroideryMobile from "../../assets/images/banners/ACP-Embroidery-Mobile.png";
import ACPFulfillment from "../../assets/images/banners/ACP-Fulfillment.png";
import ACPFulfillmentMobile from "../../assets/images/banners/ACP-Fulfillment-Mobile.png";
import ACPGraphicDesign from "../../assets/images/banners/ACP-Graphic-Design.png";
import ACPGraphicDesignMobile from "../../assets/images/banners/ACP-Graphic-Design-Mobile.png";
import ACPMain from "../../assets/images/banners/ACP-Main.png";
import ACPMainMobile from "../../assets/images/banners/ACP-Main-Mobile.png";
import ACPPrintOnDemand from "../../assets/images/banners/ACP-On-Demand.png";
import ACPPrintOnDemandMobile from "../../assets/images/banners/ACP-On-Demand-Mobile.png";
import ACPScreenPrinting from "../../assets/images/banners/ACP-Screenprinting.png";
import ACPScreenPrintingMobile from "../../assets/images/banners/ACP-Screenprinting-Mobile.png";
import ACPSewing from "../../assets/images/banners/ACP-Sewing.png";
import ACPSewingMobile from "../../assets/images/banners/ACP-Sewing-Mobile.png";

import "./style.css";

const HomeSlideShow = (props) => {
    const { screenWidth, location } = props;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    let banners;
    if (screenWidth >= 992 && location.includes("www.customtfactory.com")) {
        banners = [
            MainBanner, 
            ScreenPrinting, 
            Embroidery,
            Fulfillment,
            Ecommerce, 
            GraphicDesign, 
            PrintOnDemand, 
            Sewing,
            DyeSub,
            DirectTransfer
        ];
    } else if (screenWidth <= 991 && location.includes("www.customtfactory.com")) {
        banners = [
            MainBannerMobile, 
            ScreenPrintingMobile, 
            EmbroideryMobile,
            FulfillmentMobile,
            EcommerceMobile, 
            GraphicDesignMobile, 
            PrintOnDemandMobile, 
            SewingMobile,
            DyeSubMobile,
            DirectTransferMobile
        ];
    } else if (screenWidth >= 992 && location.includes("www.thecustomtfactory.com")) {
        banners = [
            ACPMain, 
            ACPScreenPrinting, 
            ACPEmbroidery,
            ACPFulfillment,
            ACPEcommerce, 
            ACPGraphicDesign, 
            ACPPrintOnDemand, 
            ACPSewing,
            ACPDyeSub,
            ACPDirectTransfer
        ];
    } else if (screenWidth <= 991 && location.includes("www.thecustomtfactory.com")) {
        banners = [
            ACPMainMobile, 
            ACPScreenPrintingMobile, 
            ACPEmbroideryMobile,
            ACPFulfillmentMobile,
            ACPEcommerceMobile, 
            ACPGraphicDesignMobile, 
            ACPPrintOnDemandMobile, 
            ACPSewingMobile,
            ACPDyeSubMobile,
            ACPDirectTransferMobile
        ];
    }

    const resetTimeout = () => {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex(prevIndex => prevIndex === banners.length - 1 ? 0 : prevIndex + 1)
        }, 7500);
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="home-slideshow">
            <div 
                className="home-slideshow-slider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}
            >
                {banners.map((banner, index) => (
                    <div className="home-slide" key={index}>
                        <Image draggable="false" fluid src={banner} />
                    </div>
                ))}
            </div>
            <div className="home-slideshow-dots">
                    {banners.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={`home-slideshow-dot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        >    
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default HomeSlideShow;