import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import ContactForm from "../../components/ContactForm";

class Contact extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Contact</Header>
                        <ContactForm />
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Contact;