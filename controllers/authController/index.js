const db = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { zuse, acp, union } = require("../../models/users");

let getUser;
let setUserData;
let getUserByEmail;

const handleRequest = (url) => {
    if (url === "/api/zuse/auth") {
        getUser = zuse.getUser;
        setUserData = zuse.setUserData;
        getUserByEmail = zuse.getUserByEmail;
    } else if (url === "/api/acp/auth") {
        getUser = acp.getUser;
        setUserData = acp.setUserData;
        getUserByEmail = acp.getUserByEmail;
    } else if (url === "/api/union/auth") {
        getUser = union.getUser;
        setUserData = union.setUserData;
        getUserByEmail = union.getUserByEmail;
    };
    return {
        getUser,
        setUserData,
        getUserByEmail
    };
};

module.exports = {
    register: (req, res) => {
        handleRequest(req.baseUrl);
        db.query(getUser, [req.body.email, req.body.first_name, req.body.last_name], (err, data) => {
            if (err) return res.json(err);
            if (data.length) return res.json("User already exists");

            if (req.body.password.length < 8) return res.status(403).json("Password must be at least 8 characters long!");

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const values = [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                hash
            ];

            console.log(values);

            db.query(setUserData, [values], (err, data) => {
                if (err) return res.json(err);
                return res.status(200).json("User registered");
            });
        });
    },
    login: (req, res) => {
        handleRequest(req.baseUrl);
        db.query(getUserByEmail, [req.body.email], (err, data) => {
            if (err) return res.json(err);
            if (data.length === 0) return res.status(404).json("User not found");

            const isPassword = bcrypt.compareSync(req.body.password, data[0].password);
            if (!isPassword) return res.status(400).json("Invalid user or password");

            const token = jwt.sign({ id: data[0].id }, process.env.SECRET);
            const { password, ...other } = data[0];

            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(other);
        });
    },
    logout: (req, res) => {
        handleRequest(req.baseUrl);
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true
        }).status(200).json("User logged out");
    },
    test: (req, res) => {
        res.json("Test route");
    }
};