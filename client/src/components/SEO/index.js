import React from "react";
import { Helmet } from "react-helmet-async";
import ZuseFavicon from "../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../assets/images/ACP-favicon.png";

export default ({location, title, description, keywords, type, image, url}) => {
    return (
        <Helmet>
            {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
            <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc."} - {title}</title>
            <meta name="decription" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};