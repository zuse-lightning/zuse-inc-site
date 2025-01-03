import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Rating } from "semantic-ui-react";
import { axiosInstance } from "../../utils/api";
import moment from "moment";

import "./style.css";

const HomeReviews = (props) => {
    
    const { whichWebsite, screenWidth } = props;

    const [reviews, setReviews] = useState([]);

    const site = whichWebsite(window.location.href, "zuse", "acp", "union");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(`${site}/reviews`);
                setReviews(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    return (
        <div id="home-reviews-container">
            <p className="home-reviews-text">{reviews.length > 0 ? "Don't take our word for it, listen to our satisfied customers!" : "Looks like we don't have any reviews yet, you could be the first!"}</p>
            {reviews.length > 0 ? null : <div id="home-reviews-no-result-container">
                <Image id="home-reviews-no-result-image" src="https://zuse-inc-bucket.s3.us-east-1.amazonaws.com/no-results-white.png" draggable="false" />
            </div>}
            <div id="home-reviews">
                {reviews.map((review, index) => {
                    const reviewIndex = screenWidth > 1199 ? 5 : 6;
                    return (
                        (review.rating < 3 || index >= reviewIndex) ? null : <div key={review.id} className="home-review-card-col">
                            <Link to={`/review/${review.id}`}>
                                <div className="home-review-card">
                                    <Image className="home-review-card-image" src={review.image} draggable="false" />
                                    <Rating className="home-review-card-rating" maxRating={5} rating={review.rating} size="huge" disabled />
                                    <div className="home-review-card-text">{review.text}</div>
                                    <div className="home-review-card-author">{review.first_name} {review.last_name}</div>
                                    <div className="home-review-card-date">{moment(review.date).format("MMMM Do YYYY")}</div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <Button as={Link} to="/reviews" size="massive" id="home-reviews-btn">See More Reviews</Button>
        </div>
    );
};

export default HomeReviews;