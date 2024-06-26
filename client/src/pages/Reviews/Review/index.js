import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Review = (props) => {

    const { currentUser, notAuthorized } = props.auth;
    const { whichWebsite } = props;
    const [review, setReview] = useState({});
    const site = whichWebsite(window.location.href, "zuse", "acp", "union");

    const location = useLocation();
    const navigate = useNavigate();
    const reviewId = location.pathname.split("/")[2];
    console.log(reviewId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`reviews/${reviewId}`);
                setReview(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [reviewId])

    const handleDelete = async () => {
        try {
            await axios.delete(`/reviews/${reviewId}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }
    
    // useEffect(() => {
    //     notAuthorized();
    // }, [currentUser]);
    
    return (
        <h1>Review</h1>
    );
}

export default Review;