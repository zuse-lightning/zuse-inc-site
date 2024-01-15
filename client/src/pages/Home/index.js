import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";

import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h1">Home</Header>
                        </Grid.Column>
                    </Grid.Row>
            </>
        );
    }
}

export default Home;