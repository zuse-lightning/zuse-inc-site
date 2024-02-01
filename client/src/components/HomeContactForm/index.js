import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Grid, Header, Icon } from "semantic-ui-react";

import "./style.css";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b47b0040-bba2-11ee-8fa9-872d80d8eac1";

const HomeContactForm = (props) => {
    const { screenWidth } = props;
    const [submitted, setSubmitted] = useState(false);
    const { register } = useForm();

    let contactFormColumns = new Array(8);
    for (let i = 0; i < contactFormColumns.length; i++) {
        if (i >= 6) {
            contactFormColumns[i] = 4;
        } else {
            contactFormColumns[i] = 8;
        }
    }

    const handleGridResize = (width) => {
        if (width <= 2292 && width >= 2031) {
            contactFormColumns[6] = 5;
            contactFormColumns[7] = 5;
        } else if (width <= 1699 && width >= 1200) {
            contactFormColumns[6] = 6;
            contactFormColumns[7] = 6;
        } else if (width <= 1199 && width >= 992) {
            contactFormColumns[6] = 7;
            contactFormColumns[7] = 9;
        } else if (width <= 991 && width >= 768) {
            contactFormColumns.forEach((column, index) => {
                column = 16;
                if (index === 6) {
                    contactFormColumns[index] = column - 10;
                } else if (index === 7) {
                    contactFormColumns[index] = column - 10;
                } else {
                    contactFormColumns[index] = column;
                }
            });
        } else if (width <= 767) {
            contactFormColumns.forEach((column, index) => {
                column = 16;
                contactFormColumns[index] = column;
            });
        } else {
            contactFormColumns[6] = 4;
            contactFormColumns[7] = 4;
        }
    }

    handleGridResize(screenWidth);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const homeContactForm = document.getElementById("home-contact-form");
        const formData = new FormData(homeContactForm);

        console.log(formData);

        const response = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
                Accept: 'multipart/form-data',
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        }).then((response) => {
            if (!response.ok) {
                console.log("Something went wrong");
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
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={contactFormColumns[0]}>
                        <Header as="h1" id="home-contact-header">Request A Call Back</Header>
                        <Header as="h3" id="home-contact-subheader">If you have any further questions, feel free to fill out your information and let us know!</Header>
                        <Header id="home-contact-phone-number" as="h4"><Icon id="home-contact-phone-icon" name="phone" />Call: 203-675-9550</Header>
                        <Header id="home-contact-address" as="h4"><Icon id="home-contact-map-icon" name="map pin" />54 East Industrial Road, Branford, CT 06405</Header>
                    </Grid.Column>
                    <Grid.Column width={contactFormColumns[1]}>
                        <form
                            action={FORM_ENDPOINT}
                            onSubmit={handleSubmit}
                            method="POST"
                            id="home-contact-form"
                        >
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={contactFormColumns[2]}>
                                        <input id="home-name-input" type="text" placeholder="Name (required)" name="name" required />
                                    </Grid.Column>
                                    <Grid.Column width={contactFormColumns[3]}>
                                        <input id="home-email-input" type="email" placeholder="Email (required)" name="email" required />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={contactFormColumns[4]}>
                                        <input id="home-phone-input" type="text" placeholder="Phone Number" name="phone-number" />
                                    </Grid.Column>
                                    <Grid.Column width={contactFormColumns[5]}>
                                        <input id="home-company-input" type="text" placeholder="Company" name="company" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <textarea id="home-message-input" placeholder="Message" name="message" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row centered>
                                    <Grid.Column width={contactFormColumns[6]}>
                                        <label id="upload-label" for="home-art-file">Upload Your Design:</label>
                                    </Grid.Column>
                                    <Grid.Column width={contactFormColumns[7]}>
                                        <input type="file" {...register("file")} id="home-art-file" name="artFile" accept="image/png, image/jpeg, image/jpg" multiple />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <button id="home-submit-btn" type="submit">Send Message</button>
                            <div style={{ textIndent: "-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
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