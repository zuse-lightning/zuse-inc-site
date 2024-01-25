import React, { useState } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

import "./style.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b47b0040-bba2-11ee-8fa9-872d80d8eac1";

const HomeContactForm = () => {
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
        <div id="home-contact-form-container">
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={7}>
                        <Header as="h1" id="home-contact-header">Request A Call Back</Header>
                        <Header as="h3" id="home-contact-subheader">If you have any further questions, feel free to fill out your information and let us know!</Header>
                        <div className="home-form-field-col">
                            <Header id="home-contact-phone-number" as="h4"><Icon id="home-contact-phone-icon" name="phone" />Call: 203-675-9550</Header>
                        </div>
                        <div className="home-form-field-col">
                            <Header id="home-contact-address" as="h4"><Icon id="home-contact-map-icon" name="map pin" />54 East Industrial Road, Branford, CT 06405</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <form
                            action={FORM_ENDPOINT}
                            onSubmit={handleSubmit}
                            method="POST"
                        >
                            <div id="home-form-field-container">
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
                                    <textarea id="home-message-input" placeholder="Message" name="name" />
                                </div>
                            </div>
                            <button id="home-submit-btn" type="submit">Send Message</button>
                            <div style={{textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute"}} aria-hidden="true">
                                <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
                            </div>
                        </form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default HomeContactForm;