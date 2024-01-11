import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class About extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">About</Header>
                    </Grid.Column>
                </Grid.Row> 
            </>
        );
    }
}

export default About;