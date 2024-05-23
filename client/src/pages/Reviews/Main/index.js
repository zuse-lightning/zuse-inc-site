import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Header, Image, Icon, Rating } from "semantic-ui-react";
import axios from "axios";

import "../style.css";

const Main = (props) => {
    const testData = [
        { id: 1, rating: 5, text: "This is a test review.", author: "John Doe", date: "2021-01-01", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Black-Jersey-Polo-Bull.png" },
        { id: 2, rating: 4, text: "This is a test review.", author: "Jane Doe", date: "2021-01-02", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Black-Jersey-Polo-BullStar.png" },
        { id: 3, rating: 3, text: "This is a test review.", author: "John Smith", date: "2021-01-03", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Black-Jersey-Polo-PBR.png" },
        { id: 4, rating: 2, text: "This is a test review.", author: "Jane Smith", date: "2021-01-04", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Black-Jersey-Polo-PBRStar.png" },
        { id: 5, rating: 1, text: "This is a test review.", author: "John Doe", date: "2021-01-05", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Blue-Jersey-Polo-BullStar.png" },
        { id: 6, rating: 5, text: "This is a test review.", author: "Jane Doe", date: "2021-01-06", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Blue-Jersey-Polo-PBR.png" },
        { id: 7, rating: 4, text: "This is a test review.", author: "John Smith", date: "2021-01-07", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Blue-Jersey-Polo-PBRStar.png" },
        { id: 8, rating: 3, text: "This is a test review.", author: "Jane Smith", date: "2021-01-08", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Grey-Jersey-Polo-Bull.png" },
        { id: 9, rating: 2, text: "This is a test review.", author: "John Doe", date: "2021-01-09", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Grey-Jersey-Polo-BullStar.png" },
        { id: 10, rating: 1, text: "This is a test review.", author: "Jane Doe", date: "2021-01-10", image: "https://zuse-inc-bucket.s3.amazonaws.com/test-review-imgs/Grey-Jersey-Polo-PBR.png" }
    ];

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
                {testData.map((review) => {
                    return (
                        <div key={review.id} className="review-col">
                            <div className="review-card">
                                <Image src={review.image} />
                                <Rating maxRating={5} rating={review.rating} icon="star" size="huge" disabled />
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

export default Main;