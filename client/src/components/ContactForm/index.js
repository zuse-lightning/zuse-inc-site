import React, { useState } from "react";
import { Header, Icon } from "semantic-ui-react";

import "./style.css";

const FORM_ENDPOINT = "https://herotofu.com/start";

const ContactForm = (props) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        };

        fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
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
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    };

    return (
        <div id="contact-form-container">
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
            >
                <div id="form-field-container">
                    <div className="form-field-col">
                        <Header id="contact-phone-number" as="h4"><Icon id="contact-phone-icon" name="phone" />Call: 203-675-9550</Header>
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
                        <textarea id="message-input" placeholder="Message" name="name" />
                    </div>
                </div>
                <button id="submit-btn" type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;