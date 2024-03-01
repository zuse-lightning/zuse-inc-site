import React, { useState, useEffect, useRef } from "react";
import { Image } from "semantic-ui-react";
import MainBanner from "../../assets/images/banners/new-main-banner.png";
import Fulfillment from "../../assets/images/banners/fulfillment-banner.png";
import ScreenPrinting from "../../assets/images/banners/screenprinting-banner.png";
import Embroidery from "../../assets/images/banners/embroidery-banner.png";
import GraphicDesign from "../../assets/images/banners/graphic-design-banner.png";
import PrintOnDemand from "../../assets/images/banners/print-on-demand-banner.png";
import DTGDTF from "../../assets/images/banners/DTG_DTF-banner.png";
import DyeSub from "../../assets/images/banners/dye-sublimation-banner.png";
import Sewing from "../../assets/images/banners/sewing-banner.png";
import MainBannerMobile from "../../assets/images/banners/new-main-banner-mobile.png";
import FulfillmentMobile from "../../assets/images/banners/fulfillment-mobile-banner.png";
import ScreenPrintingMobile from "../../assets/images/banners/screenprinting-mobile-banner.png";
import EmbroideryMobile from "../../assets/images/banners/embroidery-mobile-banner.png";
import GraphicDesignMobile from "../../assets/images/banners/graphic-design-banner-mobile.png";
import PrintOnDemandMobile from "../../assets/images/banners/print-on-demand-banner-mobile.png";
import DTGDTFMobile from "../../assets/images/banners/DTG_DTF-banner-mobile.png";
import DyeSubMobile from "../../assets/images/banners/dye-sublimation-banner-mobile.png";
import SewingMobile from "../../assets/images/banners/sewing-banner-mobile.png";

import "./style.css";

const HomeSlideShow = (props) => {
    const { screenWidth } = props;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    let banners;
    if (screenWidth >= 992) {
        banners = [
            MainBanner, 
            Fulfillment, 
            ScreenPrinting, 
            Embroidery, 
            GraphicDesign, 
            PrintOnDemand, 
            DTGDTF,
            DyeSub,
            Sewing
        ];
    } else {
        banners = [
            MainBannerMobile, 
            FulfillmentMobile, 
            ScreenPrintingMobile, 
            EmbroideryMobile, 
            GraphicDesignMobile, 
            PrintOnDemandMobile, 
            DTGDTFMobile,
            DyeSubMobile,
            SewingMobile
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
                        <Image fluid src={banner} />
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