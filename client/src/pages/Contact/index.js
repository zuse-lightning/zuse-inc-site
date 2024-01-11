import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Contact extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Contact</Header>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Contact;