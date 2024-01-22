import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { Grid, Header } from "semantic-ui-react";
import TopCatalogs from "../../components/TopCatalogs";
import CatalogSanmar from "./CatalogSanmar";

const Catalogs = () => {

    const { pathname } = useLocation();
    
    return (
        <>
            <Grid.Row>
                <Grid.Column>
                    {pathname === "/catalogs" ? <TopCatalogs pathname={pathname} /> : null}
                    <Routes>
                        <Route exact path="sanmar" element={<CatalogSanmar />} />
                        <Route exact path="ssactivewear" />
                        <Route exact path="alphabroder" />
                        <Route exact path="augusta-sportswear" />
                        <Route exact path="rothco" />
                    </Routes>
                </Grid.Column>
            </Grid.Row>
        </>
    );
}

export default Catalogs;