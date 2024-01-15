import React, { useState } from "react";

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
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
        >
            <div>
                <input type="text" placeholder="Your name..." name="name" required />
            </div>
            <div>
                <input type="email" placeholder="Email" name="email" required />
            </div>
            <div>
                <textarea placeholder="Your message..." name="name" required />
            </div>
            <div>
                <button type="submit">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;