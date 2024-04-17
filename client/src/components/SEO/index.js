import React from "react";
import { Helmet } from "react-helmet-async";

export default ({location, whichWebsite, title, description, keywords, type, image, url}) => {
    return (
        <Helmet>
            {whichWebsite(
                location, 
                <link rel="icon" href="https://zuse-inc-bucket.s3.amazonaws.com/zuse-favicon.png" />, 
                <link rel="icon" href="https://zuse-inc-bucket.s3.amazonaws.com/ACP-favicon.png" />, 
                <link rel="icon" href="https://zuse-inc-bucket.s3.amazonaws.com/Union-Logo.png" />
            )}
            {/* {location.includes("americancontractprinting.com") ? <link rel="icon" href="https://zuse-inc-bucket.s3.amazonaws.com/ACP-favicon.png" /> : <link rel="icon" href="https://zuse-inc-bucket.s3.amazonaws.com/zuse-favicon.png" />} */}
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