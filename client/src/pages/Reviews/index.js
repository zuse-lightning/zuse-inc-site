import React, { useState, useEffect } from "react";
import { Link, useLocation, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Write from "./Write";
import Edit from "./Edit";
import Review from "./Review";

import "./style.css";

const Reviews = (props) => {

    const { auth, whichWebsite } = props;
    
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Main auth={auth} whichWebsite={whichWebsite} />} />
                <Route exact path="/write" element={<Write auth={auth} whichWebsite={whichWebsite} />} />
                <Route exact path="/edit/:id" element={<Edit auth={auth} whichWebsite={whichWebsite} />} />
                <Route exact path="/:id" element={<Review auth={auth} whichWebsite={whichWebsite} />} />
            </Routes>
        </>
    );
};

export default Reviews;