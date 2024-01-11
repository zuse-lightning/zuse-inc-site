import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Services extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Services</Header>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Services;