import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../../components/ContactForm";

import "./style.css";

class Contact extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Zuse Inc. - Contact</title>
                    <meta name="description" content="Call us or send us a message with your info and a potential design" />
                    <meta name="keywords" content="Contact, Screen Printing, Embroidery, Banners, Promotional Items, Shopify Web Stores, Decals, Custom Apparel"/>
                </Helmet>
                <iframe
                    id="zuse-location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11989.860418926502!2d-72.753029!3d41.2987445!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d57560352e67%3A0xcf283c3f97c78848!2sZuse%20Inc.!5e0!3m2!1sen!2sus!4v1705088121867!5m2!1sen!2sus"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <ContactForm />
            </>
        );
    }
}

export default Contact;