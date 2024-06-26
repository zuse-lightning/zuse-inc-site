import React, { useState, useEffect } from "react";
import  { Rating } from "semantic-ui-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import { Header } from "semantic-ui-react";

import "./style.css";

const Review = (props) => {

    const { currentUser, notAuthorized } = props.auth;
    const { whichWebsite } = props;
    const [review, setReview] = useState({});
    const site = whichWebsite(window.location.href, "zuse", "acp", "union");

    const location = useLocation();
    const navigate = useNavigate();
    const reviewId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:3001/api/${site}/reviews/${reviewId}`);
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
        <div id="review-container">
            <Header as="h1" id="review-header">{review.first_name} {review.last_name} Said</Header>
            <p id="review-date">{moment(review.date).format("MMMM Do YYYY")}</p>
            <Rating maxRating={5} rating={review.rating} icon="star" size="huge" disabled />
            <p id="review-text">{review.text}</p>
        </div>
    );
}

export default Review;