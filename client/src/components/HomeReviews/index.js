import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Header, Image, Icon, Rating } from "semantic-ui-react";
import { axiosInstance } from "../../utils/api";
import moment from "moment";

import "./style.css";

const HomeReviews = (props) => {

    const { currentUser, notAuthorized } = props.auth;
    const { whichWebsite } = props;

    const [reviews, setReviews] = useState([]);

    const site = whichWebsite(window.location.href, "zuse", "acp", "union");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(`${site}/reviews/home`);
                setReviews(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    return (
        <div id="home-reviews-container">
            <div id="home-reviews-headers-container">
                <div className="home-reviews-headers-col">
                    <Header as="h1" id="home-reviews-header">Reviews</Header>
                </div>
                <div className="home-reviews-headers-col">
                    <Button as={Link} to="/write" size="massive" icon labelPosition="right" id="write-review-btn">Write A Review<Icon id="write-icon" name="edit" /></Button>
                </div>
            </div>
            <p className="home-reviews-text">{reviews.length > 0 ? "Don't take our word for it, listen to our satisfied customers!" : "Looks like we don't have any reviews yet, you could be the first!"}</p>
            {reviews.length > 0 ? null : <div id="home-reviews-no-result-container">
                <Image id="home-reviews-no-result-image" src="https://zuse-inc-bucket.s3.amazonaws.com/no-results-blue.png" draggable="false" />
            </div>}
            <div id="home-reviews">
                {reviews.map((review) => {
                    return (
                        review.rating < 3 ? null : <div key={review.id} className="home-review-card-col">
                            <Link to={`/review/${review.id}`}><div className="home-review-card">
                                <Image className="home-review-card-image" src={review.image} draggable="false" />
                                <Rating className="home-review-card-rating" maxRating={5} rating={review.rating} icon="star" size="huge" disabled />
                                <div className="home-review-card-text">{review.text}</div>
                                <div className="home-review-card-author">{review.first_name} {review.last_name}</div>
                                <div className="home-review-card-date">{moment(review.date).format("MMMM Do YYYY")}</div>
                            </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeReviews;