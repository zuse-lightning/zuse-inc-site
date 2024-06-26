import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Review = (props) => {

    const { currentUser, notAuthorized } = props.auth;
    
    // useEffect(() => {
    //     notAuthorized();
    // }, [currentUser]);
    
    return (
        <h1>Review</h1>
    );
}

export default Review;