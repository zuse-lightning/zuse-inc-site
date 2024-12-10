const db = require("../../config");
const jwt = require("jsonwebtoken");
const { zuse, acp, union } = require("../../models/reviews");

let getAllReviews;
let getReviewById;
let addUserReview;
let deleteUserReview;
let updateUserReview;

const handleRequest = (url) => {
    if (url === "/api/zuse/reviews") {
        getAllReviews = zuse.getAllReviews;
        getReviewById = zuse.getReviewById;
        addUserReview = zuse.addUserReview;
        deleteUserReview = zuse.deleteUserReview;
        updateUserReview = zuse.updateUserReview;
    } else if (url === "/api/acp/reviews") {
        getAllReviews = acp.getAllReviews;
        getReviewById = acp.getReviewById;
        addUserReview = acp.addUserReview;
        deleteUserReview = acp.deleteUserReview;
        updateUserReview = acp.updateUserReview;
    } else if (url === "/api/union/reviews") {
        getAllReviews = union.getAllReviews;
        getReviewById = union.getReviewById;
        addUserReview = union.addUserReview;
        deleteUserReview = union.deleteUserReview;
        updateUserReview = union.updateUserReview;
    }
};

module.exports = {
    getReviews: (req, res) => {
        handleRequest(req.baseUrl);
        console.log(req.hostname);
        console.log("getting all reviews");
        db.query(getAllReviews, [3], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    },
    getReview: (req, res) => {
        handleRequest(req.baseUrl);
        console.log("getting review by id");

        db.query(getReviewById, [req.params.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data[0]);
        });
    },
    addReview: (req, res) => {
        handleRequest(req.baseUrl);
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if (err) return res.status(403).json("Invalid token!");

            const values = [
                userInfo.id,
                req.body.text,
                req.body.rating,
                req.body.date,
                req.body.image 
            ];
            
            console.log("adding review with " + values);

            db.query(addUserReview, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json("Review added");
            });
        });
    },
    deleteReview: (req, res) => {
        handleRequest(req.baseUrl);
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if (err) return res.status(403).json("Invalid token!");

            const reviewId = req.params.id;

            console.log("deleting review with id " + reviewId + " and user id " + userInfo.id);

            db.query(deleteUserReview, [reviewId, userInfo.id], (err, data) => {
                if (err) return res.status(500).json("You can only delete your own reviews!");
                return res.json("Review deleted");
            });
        });
    },
    updateReview: (req, res) => {
        handleRequest(req.baseUrl);
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, userInfo) => {
            if (err) return res.status(403).json("Token is not valid.");

            const reviewId = req.params.id;
            const values = [req.body.text, req.body.rating, req.body.image];

            console.log("updating review with id " + reviewId + " and uid " + userInfo.id);

            db.query(updateUserReview, [...values, reviewId, userInfo.id], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.json("Review updated");
            });
        });
    }
};