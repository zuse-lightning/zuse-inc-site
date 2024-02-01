import React, { useState, useEffect, useRef } from "react";
import { Image } from "semantic-ui-react";
import MainBanner from "../../assets/images/banners/main-banner.png";
import Fulfillment from "../../assets/images/banners/fulfillment-banner.png";
import ScreenPrinting from "../../assets/images/banners/screenprinting-banner.png";
import Embroidery from "../../assets/images/banners/embroidery-banner.png";
import MainBannerMobile from "../../assets/images/banners/main-mobile-banner.png";
import FulfillmentMobile from "../../assets/images/banners/fulfillment-mobile-banner.png";
import ScreenPrintingMobile from "../../assets/images/banners/screenprinting-mobile-banner.png";
import EmbroideryMobile from "../../assets/images/banners/embroidery-mobile-banner.png";

import "./style.css";

const HomeSlideShow = (props) => {
    const { screenWidth } = props;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    let banners;
    if (screenWidth >= 992) {
        banners = [MainBanner, Fulfillment, ScreenPrinting, Embroidery];
    } else {
        banners = [MainBannerMobile, FulfillmentMobile, ScreenPrintingMobile, EmbroideryMobile];
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
        }, 10000);
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