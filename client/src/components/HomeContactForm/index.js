import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Header, Icon } from "semantic-ui-react";

import "./style.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b47b0040-bba2-11ee-8fa9-872d80d8eac1";

const HomeContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const { register } = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const homeContactForm = document.getElementById("home-contact-form");
        const formData = new FormData(homeContactForm);

        console.log(formData);

        const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
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
                <div id="home-thank-you-container">
                    <h2>Thank you!</h2>
                    <div>We'll be in touch soon.</div>
                </div>
            </>
        );
    };

    return (
        <div id="home-contact-form-container">

            <div className="home-contact-col">
                <Header as="h1" id="home-contact-header">Request A Call Back</Header>
                <Header as="h3" id="home-contact-subheader">If you have any further questions, feel free to fill out your information and let us know!</Header>
                <Header id="home-contact-phone-number" as="h4"><Icon id="home-contact-phone-icon" name="phone" />Call: 203-675-9550</Header>
                <Header id="home-contact-address" as="h4"><Icon id="home-contact-map-icon" name="map pin" />54 East Industrial Road, Branford, CT 06405</Header>
            </div>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                className="home-contact-col"
            >
                <div className="home-form-field-col">
                    <input id="home-name-input" type="text" placeholder="Name (required)" name="name" required />
                </div>
                <div className="home-form-field-col">
                    <input id="home-email-input" type="email" placeholder="Email (required)" name="email" required />
                </div>
                <div className="home-form-field-col">
                    <input id="home-phone-input" type="text" placeholder="Phone Number" name="phone-number" />
                </div>
                <div className="home-form-field-col">
                    <input id="home-company-input" type="text" placeholder="Company" name="company" />
                </div>
                <div className="home-form-field-col">
                    <textarea id="home-message-input" placeholder="Message" name="message" />
                </div>
                <div className="home-form-field-col">
                    <label for="art-file">Upload Your Design:</label>
                </div>
                <div className="home-form-field-col">
                    <input type="file" {...register("file")} id="home-art-file" name="artFile" accept="image/png, image/jpeg, image/jpg" multiple />
                </div>
                <button id="home-submit-btn" type="submit">Send Message</button>
                <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
                    <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                </div>
            </form>
        </div>
    );
}

export default HomeContactForm;