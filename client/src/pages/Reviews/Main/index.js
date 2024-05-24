import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Header, Image, Icon, Rating } from "semantic-ui-react";
import axios from "axios";

import "../style.css";
import { whichWebsite } from "../../../containers/App";

const Main = (props) => {

    const { currentUser, notAuthorized } = props.auth;

    const [reviews, setReviews] = useState([]);

    const site = whichWebsite(window.location.href, "zuse", "acp", "union");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${site}/reviews`);
                setReviews(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    return (
        <div id="reviews-container">
            <div id="reviews-headers-container">
                <div className="reviews-headers-col">
                    <Header as="h1" id="reviews-header">Reviews</Header>
                </div>
                <div className="reviews-headers-col">
                    <Button as={Link} to="/reviews/write" size="massive" icon labelPosition="right" id="write-review-btn">Write A Review<Icon id="write-icon" name="edit" /></Button>
                </div>
            </div>
            <p className="reviews-text">Don't take our word for it, listen to our satisfied customers!</p>
            <div id="reviews">
                {reviews.map((review) => {
                    return (
                        review.rating < 3 ? null : <div key={review.id} className="review-col">
                            <Link to={`/reviews/${review.id}`}>
                                <div className="review-card">
                                    <Image src={review.image} />
                                    <Rating maxRating={5} rating={review.rating} icon="star" size="huge" disabled />
                                    <div className="review-card-text">{review.text}</div>
                                    <div className="review-card-author">{review.author}</div>
                                    <div className="review-card-date">{review.date}</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Main;