import React, { Component } from "react";
import { Grid, Header, Image } from "semantic-ui-react";

import "./style.css";

class Home extends Component {
    render() {
        return (
            <>
                <div id="home-container">
                    <Grid.Row>
                        <Grid.Column>
                            <Header as="h1">Home</Header>
                        </Grid.Column>
                    </Grid.Row>
                </div>

            </>
        );
    }
}

export default Home;