import React, { useState, useEffect } from "react";
import { Header, Rating } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import "./style.css";

const Edit = (props) => {

    const { whichWebsite } = props;
    const { currentUser, notAuthorized } = props.auth;
    const [review, setReview] = useState({});
    const [rating, setRating] = useState(0);
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);

    const site = whichWebsite(window.location.href, "zuse", "acp", "union");
    const location = useLocation();
    const navigate = useNavigate();
    const reviewId = location.pathname.split("/")[2];

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("writeFile", file);
            const res = await axios.post("http://localhost:3001/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    const handleRate = async () => {
        const reviewRating = document.getElementById("review-rating");
        Object.keys(reviewRating.children).forEach(key => {
            reviewRating.children[key].addEventListener("click", () => {
                setRating(reviewRating.children[key].getAttribute("aria-posinset"));
            });
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imgUrl = await upload();
        try {
            const res = await axios.put(`http://localhost:3001/api/${site}/reviews/${reviewId}`, {
                rating: rating,
                text: text,
                date: moment().format("YYYY-MM-DD"),
                image: imgUrl.url
            }, { withCredentials: true });
            navigate("/reviews");
        } catch (err) {
            console.log(err);
        };
    };

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
    }, [reviewId]);
    
    useEffect(() => {
        notAuthorized();
    }, [currentUser]);

    useEffect(() => {
        setText(review.text);
        setRating(review.rating);
        setFile(review.image);
    }, [review]);

    useEffect(() => {
        handleRate();
    }, [rating]);

    return (
        <div id="edit-container">
            <Header as="h1" id="edit-header">Need to Change Anything?</Header>
            <p className="edit-text">
                You can adjust your rating, review, or image here.
            </p>
            <form id="edit-form">
                <div id="edit-form-container">
                    <div className="edit-form-col">
                        <label id="rating-label" htmlFor="edit-rating">Rating: {rating}</label>
                        <Rating id="review-rating" name="rating" value={rating} maxRating={5} rating={rating} icon="star" size="huge" />
                    </div>
                    <div className="edit-form-col">
                        <label id="edit-upload-label" htmlFor="writeFile">Upload Product Image:</label>
                    </div>
                    <div className="edit-form-col">
                        <input type="file" id="edit-file" name="writeFile" accept=".png, .jpg, .jpeg" required onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                    <div className="edit-form-col">
                        <label id="edit-review-label" htmlFor="edit-text">Review:</label>
                        <br />
                        <br />
                        <textarea id="edit-review" name="edit-text" placeholder="Write a review..." value={text} onChange={(e) => setText(e.target.value)} required />
                    </div>
                    <div className="edit-form-col">
                        <button onClick={handleSubmit} type="submit" id="edit-submit-btn">Submit Review</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Edit;