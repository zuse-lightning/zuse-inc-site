import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Header, Image, Icon, Rating } from "semantic-ui-react";
import axios from "axios";

import "./style.css";

const Reviews = (props) => {

    const testData = [
        { id: 1, rating: 5, text: "This is a test review.", author: "John Doe", date: "2021-01-01" },
        { id: 2, rating: 4, text: "This is a test review.", author: "Jane Doe", date: "2021-01-02" },
        { id: 3, rating: 3, text: "This is a test review.", author: "John Smith", date: "2021-01-03" },
        { id: 4, rating: 2, text: "This is a test review.", author: "Jane Smith", date: "2021-01-04" },
        { id: 5, rating: 1, text: "This is a test review.", author: "John Doe", date: "2021-01-05" },
        { id: 6, rating: 5, text: "This is a test review.", author: "Jane Doe", date: "2021-01-06" },
        { id: 7, rating: 4, text: "This is a test review.", author: "John Smith", date: "2021-01-07" },
        { id: 8, rating: 3, text: "This is a test review.", author: "Jane Smith", date: "2021-01-08" },
        { id: 9, rating: 2, text: "This is a test review.", author: "John Doe", date: "2021-01-09" },
        { id: 10, rating: 1, text: "This is a test review.", author: "Jane Doe", date: "2021-01-10" }
    ];

    testData.map((review) => {
        console.log(review);
    });

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

    return (
        <div id="reviews-container">
            <h1 id="reviews-header">Reviews</h1>
            <div id="reviews">
                {testData.map((review) => {
                    return (
                        <div key={review.id} className="review-col">
                            <div className="review-card">
                                <Rating maxRating={5} rating={review.rating} icon="star" size="huge" />
                                <div className="review-card-text">{review.text}</div>
                                <div className="review-card-author">{review.author}</div>
                                <div className="review-card-date">{review.date}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;