import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";

const Catalogs = () => {

    const { pathname } = useLocation();
    
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

export default Catalogs;