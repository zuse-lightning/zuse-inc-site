import React, { useState, useEffect } from "react";
import { Header, Rating } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "./style.css";

const Write = (props) => {

    const [rating, setRating] = useState(0);

    useEffect(() => {
        setRating({ rating });
    });

    console.log()
    return (
        <div id="write-container">
            <Header as="h1" id="reviews-header">Tell Us How We Did</Header>
            <form id="write-form">
                <div className="write-form-row">
                    <label htmlFor="write-rating">Rating:</label>
                    <Rating maxRating={5} rating={rating} icon="star" size="huge" />
                </div>
                <div className="write-form-row">
                    <label htmlFor="write-text">Review:</label>
                    <textarea id="write-text" name="write-text" required />
                </div>
                <div className="write-form-row">
                    <button type="submit" id="write-submit-btn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Write;