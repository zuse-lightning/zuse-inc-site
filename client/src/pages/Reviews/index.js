import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Header, Image, Icon, Rating } from "semantic-ui-react";
import axios from "axios";
import moment from "moment";

import "./style.css";

const Reviews = (props) => {

    const { currentUser, notAuthorized } = props.auth;
    const { whichWebsite } = props;

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

    // useEffect(() => {
    //     notAuthorized();
    // }, [currentUser]);

    return (
        <div id="reviews-container">
            <div id="reviews-headers-container">
                <div className="reviews-headers-col">
                    <Header as="h1" id="reviews-header">Reviews</Header>
                </div>
                <div className="reviews-headers-col">
                    <Button as={Link} to="/write" size="massive" icon labelPosition="right" id="write-review-btn">Write A Review<Icon id="write-icon" name="edit" /></Button>
                </div>
            </div>
            <p className="reviews-text">Don't take our word for it, listen to our satisfied customers!</p>
            <div id="reviews">
                {reviews.map((review) => {
                    return (
                        review.rating < 3 ? null : <div key={review.id} className="review-col">
                            <Link to={`/review/${review.id}`}>
                                <div className="review-card">
                                    <Image className="review-card-image" src={"https://zuse-inc-bucket.s3.amazonaws.com/ACP-DirectTransfer.png"} />
                                    <Rating className="review-card-rating" maxRating={5} rating={review.rating} icon="star" size="huge" disabled />
                                    <div className="review-card-text">{review.text}</div>
                                    <div className="review-card-author">{review.first_name} {review.last_name}</div>
                                    <div className="review-card-date">{moment(review.date).format("MMMM Do YYYY")}</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;