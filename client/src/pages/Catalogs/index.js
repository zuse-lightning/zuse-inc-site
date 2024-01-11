import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class Catalogs extends Component {
    render() {
        return (
            <>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h1">Catalogs</Header>
                    </Grid.Column>
                </Grid.Row>
            </>
        );
    }
}

export default Catalogs;