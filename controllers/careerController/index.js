const db = require("../../config");
const jwt = require("jsonwebtoken");
const { zuse, acp, union } = require("../../models/careers");

let getAllJobs;
let getJobById;
let addJobListing;
let deleteJobListing;
let updateJobListing;

const handleRequest = (url) => {
    if (url === "/api/zuse/careers") {
        getAllJobs = zuse.getAllJobs;
        getJob = zuse.getJob;
        addJob = zuse.addJob;
        updateJob = zuse.updateJob;
        deleteJob = zuse.deleteJob;
    } else if (url === "/api/acp/careers") {
        getAllJobs = acp.getAllJobs;
        getJob = acp.getJob;
        addJob = acp.addJob;
        updateJob = acp.updateJob;
        deleteJob = acp.deleteJob;
    } else if (url === "/api/union/careers") {
        getAllJobs = union.getAllJobs;
        getJob = union.getJob;
        addJob = union.addJob;
        updateJob = union.updateJob;
        deleteJob = union.deleteJob;
    }
};

module.exports = {
    getJobs: (req, res) => {
        handleRequest(req.baseUrl);
        console.log("getting all jobs");
        db.query(getAllJobs, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data);
        });
    },
    getJob: (req, res) => {
        handleRequest(req.baseUrl);
        console.log("getting job by id");
        db.query(getJobById, [req.params.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json(data[0]);
        });
    },
    addJob: (req, res) => {
        handleRequest(req.baseUrl);
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, data) => {
            if (err) return res.status(403).json("Invalid token!");

            const values = [
                req.body.title,
                req.body.description,
                req.body.location,
                req.body.salary,
                req.body.requirements,
                req.body.responsibilities,
                req.body.date
            ];

            console.log("adding job with " + values);

            db.query(addJobListing, [values], (err, data) => {
                if (err) return res.status(500).json(err);
                return res.status(201).json("Job added!");
            });
        });
    },
    deleteJob: (req, res) => {
        handleRequest(req.baseUrl);
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, data) => {
            if (err) return res.status(403).json("Token is not valid!");

            const jobId = req.params.id;

            console.log("deleting job with id " + jobId);

            db.query(deleteJobListing, [jobId], (err, data) => {
                if (err) return res.status(500).json("Error deleting job");
                return res.status(200).json("Job deleted!");
            });
        });
    },
    updateJob: (req, res) => {
        handleRequest(req.baseUrl);
        const token = req.cookies.access_token;
        console.log(token);
        if (!token) return res.status(401).json("Not authenticated!");

        jwt.verify(token, process.env.SECRET, (err, data) => {
            if (err) return res.status(403).json("Token is not valid!");

            const jobId = req.params.id;

            const values = [
                req.body.title,
                req.body.description,
                req.body.location,
                req.body.salary,
                req.body.requirements,
                req.body.responsibilities
            ];

            console.log("updating job with " + values);

            db.query(updateJobListing, [...values, jobId], (err, data) => {
                if (err) return res.status(500).json("Error updating job");
                return res.status(200).json("Job updated!");
            });
        });
    },
    careerRouteTest: (req, res) => {
        res.status(200).json("Career route works!");
        console.log("Career route works!");
    }
};