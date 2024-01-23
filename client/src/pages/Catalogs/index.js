import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import TopCatalogs from "../../components/TopCatalogs";
import CatalogSanmar from "./CatalogSanmar";
import CatalogSSActivewear from "./CatalogSSActivewear";
import CatalogAlphaBroder from "./CatalogAlphaBroder";
import CatalogAugusta from "./CatalogAugusta";
import CatalogRothco from "./CatalogRothco";

const Catalogs = () => {

    const { pathname } = useLocation();

    return (
        <>
            {pathname === "/catalogs" ? <TopCatalogs pathname={pathname} /> : null}
            <Routes>
                <Route exact path="sanmar" element={<CatalogSanmar />} />
                <Route exact path="ssactivewear" element={<CatalogSSActivewear />} />
                <Route exact path="alphabroder" element={<CatalogAlphaBroder />} />
                <Route exact path="augusta-sportswear" element={<CatalogAugusta />} />
                <Route exact path="rothco" element={<CatalogRothco />} />
            </Routes>
        </>
    );
}

export default Catalogs;