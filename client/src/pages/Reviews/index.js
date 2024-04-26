import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Reviews = (props) => {
    
    const { currentUser, notAuthorized } = props.auth;
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/reviews");
                setReviews(res.data);
            } catch (err) {
                console.log(err);
            };
        };
    }, []);

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);
    
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    return (
        <div id="reviews-container">
            <h1 id="reviews-header">Reviews</h1>
        </div>
    );
};

export default Reviews;