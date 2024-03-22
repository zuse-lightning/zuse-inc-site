import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/ContactForm";
import ZuseFavicon from "../../assets/images/zuse-favicon.png";
import ACPFavicon from "../../assets/images/ACP-favicon.png";

import "./style.css";

class Contact extends Component {

    render() {

        const { location } = this.props;

        return (
            <>
                <Helmet>
                    {location.includes("americancontractprinting.com") ? <link rel="icon" href={ACPFavicon} /> : <link rel="icon" href={ZuseFavicon} />}
                    <title>{location.includes("americancontractprinting.com") ? "American Contract Printing" : "Zuse Inc."} - Contact</title>
                    <meta name="description" content="Call us or send us a message with your info and a potential design" />
                    <meta name="keywords" content="Contact, Screen Printing, Embroidery, Banners, Promotional Items, Shopify Web Stores, Decals, Custom Apparel" />
                    <meta name="robots" content="index, follow" />
                </Helmet>
                {location.includes("www.zuse.com") ? <iframe
                    id="zuse-location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11989.860418926502!2d-72.753029!3d41.2987445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d57560352e67%3A0xcf283c3f97c78848!2sZuse%20Inc.!5e0!3m2!1sen!2sus!4v1705088121867!5m2!1sen!2sus"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe> :
                    <iframe
                        id="acp-location"
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d95918.65066138329!2d-72.83523362227683!3d41.29890272038032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x89e7d4f4c9400001%3A0x55db33df08210da6!2s54%20E%20Industrial%20Rd%2C%20Branford%2C%20CT%2006405!3m2!1d41.2987368!2d-72.7528308!5e0!3m2!1sen!2sus!4v1710430790755!5m2!1sen!2sus"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>}
                <ContactForm location={location} />
            </>
        );
    }
}

export default Contact;