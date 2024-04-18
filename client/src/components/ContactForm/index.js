import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Header, Icon } from "semantic-ui-react";

import "./style.css";

const ZUSE_ENDPOINT = "https://www.formbackend.com/f/83494e28d94f6b77";
const ACP_ENDPOINT = "https://www.formbackend.com/f/8869acfa911e5be3";
const UNION_ENDPOINT = "https://www.formbackend.com/f/31f579beef4d1de8";

const ContactForm = (props) => {

    const { location, whichWebsite } = props;

    const [submitted, setSubmitted] = useState(false);
    const { register } = useForm();
    
    const FORM_ENDPOINT = whichWebsite(location, ZUSE_ENDPOINT, ACP_ENDPOINT, UNION_ENDPOINT);

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.isDefaultPrevented();

        const contactForm = document.getElementById("contact-form");       
        const formData = new FormData(contactForm);

        const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
                "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            },
            body: formData
        }).then((response) => {
            if (!response.ok) {
                throw new Error("Form response was not ok");
            }
            setSubmitted(true);
        }).catch((err) => {
            e.target.submit();
        });
    };

    if (submitted) {
        return (
            <>
                <div id="thank-you-container">
                    <h2>Thank you!</h2>
                    <div>We'll be in touch soon.</div>
                </div>
            </>
        );
    };

    return (
        <div id="contact-form-container">
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                id="contact-form"
            >
                <div id="form-field-container">
                    <div className="form-field-col">
                        <Header id="contact-phone-number" as="h4"><Icon id="contact-phone-icon" name="phone" />Call: 203-458-3295</Header>
                    </div>
                    <div className="form-field-col">
                        <Header id="contact-address" as="h4"><Icon id="contact-map-icon" name="map pin" />54 East Industrial Road, Branford, CT 06405</Header>
                    </div>
                    <div className="form-field-col">
                        <input id="name-input" type="text" placeholder="Name (required)" name="name" required />
                    </div>
                    <div className="form-field-col">
                        <input id="email-input" type="email" placeholder="Email (required)" name="email" required />
                    </div>
                    <div className="form-field-col">
                        <input id="phone-input" type="text" placeholder="Phone Number" name="phone-number" />
                    </div>
                    <div className="form-field-col">
                        <input id="company-input" type="text" placeholder="Company" name="company" />
                    </div>
                    <div className="form-field-col">
                        <textarea id="message-input" placeholder="Message" name="message" />
                    </div>
                    <div className="form-field-col">
                        <label htmlFor="art-file">Upload Your Design:</label>
                    </div>
                    <div className="form-field-col">
                        <input type="file" {...register("file")} id="art-file" name="artFile" accept=".png, .ai, .psd" multiple />
                    </div>
                </div>
                <button id="submit-btn" type="submit">Send Message</button>
                <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;