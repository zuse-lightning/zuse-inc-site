const db = require("../../config");
const jwt = require("jsonwebtoken");
const { getAllReviews, getReviewByIds, addUserReview, deleteUserReview, updateUserReview } = require("../../models/reviews");

module.exports = {
    getReviews: (req, res) => {
        db.query(getAllReviews, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    },
    getReview: (req, res) => {
        db.query(getReviewByIds, [req.params.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data[0]);
        });
    },
    addReview: (req, res) => {
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if (err) return res.status(403).json("Invalid token!");

            const values = [
                userInfo.id,
                req.body.text,
                req.body.rating,
                req.body.date 
            ];

            db.query(addUserReview, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json("Review added");
            });
        });
    },
    deleteReview: (req, res) => {
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if (err) return res.status(403).json("Invalid token!");

            const reviewId = req.params.id;

            db.query(deleteUserReview, [reviewId, userInfo.id], (err, data) => {
                if (err) return res.status(500).json("You can only delete your own reviews!");
                return res.json("Review deleted");
            });
        });
    },
    updateReview: (req, res) => {
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if (err) return res.status(403).json("Token is not valid.");

            const reviewId = req.params.id;
            const values = [req.body.text, req.body.rating];

            db.query(updateUserReview, [...values, reviewId, userInfo.id], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json("Review updated");
            });
        });
    }
};