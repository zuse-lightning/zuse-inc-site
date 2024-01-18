import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import TopCatalogs from "../../components/TopCatalogs";

const Catalogs = () => {

    const { pathname } = useLocation();
    
    return (
        <>
            <Grid.Row>
                <Grid.Column>
                    {pathname === "/catalogs" ? <TopCatalogs pathname={pathname} /> : null}
                    <Routes>
                        <Route exact path="/catalogs/sanmar" />
                        <Route exact path="/catalogs/ssactivewear" />
                        <Route exact path="/catalogs/alphabroder" />
                        <Route exact path="/catalogs/augusta-sportswear" />
                        <Route exact path="/catalogs/rothco" />
                    </Routes>
                </Grid.Column>
            </Grid.Row>
        </>
    );
}

export default Catalogs;