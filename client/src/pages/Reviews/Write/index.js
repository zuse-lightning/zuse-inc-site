import React, { useState, useEffect } from "react";
import { Header, Rating } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "./style.css";

const Write = (props) => {

    const [rating, setRating] = useState(0);

    const navigate = useNavigate();

    const handleRate = async () => {
        const reviewRating = document.getElementById("review-rating");
        Object.keys(reviewRating.children).forEach(key => {
            reviewRating.children[key].addEventListener("click", () => {
                setRating(reviewRating.children[key].getAttribute("aria-posinset"));
            });
        });
    };

    useEffect(() => {
        handleRate();
    }, [rating]);

    return (
        <div id="write-container">
            <Header as="h1" id="reviews-header">Tell Us How We Did</Header>
            <form id="write-form">
                <div id="write-form-container">
                    <div className="write-form-col">
                        <label htmlFor="write-rating">Rating: {rating}</label>
                        <Rating id="review-rating" maxRating={5} rating={rating} icon="star" size="huge" />
                    </div>
                    <div className="write-form-col">
                        <label htmlFor="art-file">Upload Your Design:</label>
                    </div>
                    <div className="write-form-col">
                        <input type="file" id="write-file" name="writeFile" accept=".png, .jpg, .jpeg" multiple />
                    </div>
                    <div className="write-form-col">
                        <label htmlFor="write-text">Review:</label>
                        <textarea id="write-text" name="write-text" required />
                    </div>
                    <div className="write-form-col">
                        <button type="submit" id="write-submit-btn">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Write;