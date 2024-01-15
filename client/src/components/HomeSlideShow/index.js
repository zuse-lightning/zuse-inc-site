import React, { useState, useEffect, useRef } from "react";
import { Image } from "semantic-ui-react";
import MainBanner from "../../assets/images/main-banner.png";
import Fulfillment from "../../assets/images/fulfillment-banner.png";
import ScreenPrinting from "../../assets/images/screenprinting-banner.png";
import Embroidery from "../../assets/images/embroidery-banner.png";

import "./style.css";

const banners = [MainBanner, Fulfillment, ScreenPrinting, Embroidery];

const HomeSlideShow = () => {

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

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
                        <Image src={banner} />
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