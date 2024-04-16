import React, { useState, useEffect, useRef } from "react";
import { Image } from "semantic-ui-react";
import {
    zuseSlides,
    zuseSlidesMobile,
    ACPSlides,
    ACPSlidesMobile
} from "../../assets";

import "./style.css";

const HomeSlideShow = (props) => {
    const { screenWidth, location } = props;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    let banners;
    if ((screenWidth >= 992 && location.includes("www.zuse.com")) || (screenWidth >= 992 && location.includes("localhost"))) {
        banners = zuseSlides;
    } else if (screenWidth <= 991 && location.includes("www.zuse.com") || (screenWidth <= 991 && location.includes("localhost"))) {
        banners = zuseSlidesMobile;
    } else if (screenWidth >= 992 && location.includes("americancontractprinting.com")) {
        banners = ACPSlides;
    } else if (screenWidth <= 991 && location.includes("americancontractprinting.com")) {
        banners = ACPSlidesMobile;
    } else {
        banners = zuseSlides;
    };

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