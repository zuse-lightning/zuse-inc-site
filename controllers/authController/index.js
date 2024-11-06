const db = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { zuse, acp, union } = require("../../models/users");
const sendEmail = require("../../utils/sendEmail.js");

let getUser;
let getUserById;
let getUserIds;
let setUserData;
let getUserByEmail;
let resetUserPassword;

const handleRequest = (url) => {
    if (url === "/api/zuse/auth") {
        getUser = zuse.getUser;
        getUserIds = zuse.getUserIds;
        setUserData = zuse.setUserData;
        getUserByEmail = zuse.getUserByEmail;
        resetUserPassword = zuse.resetUserPassword;
        getUserById = zuse.getUserById;
    } else if (url === "/api/acp/auth") {
        getUser = acp.getUser;
        getUserIds = acp.getUserIds;
        setUserData = acp.setUserData;
        getUserByEmail = acp.getUserByEmail;
        resetUserPassword = acp.resetUserPassword;
        getUserById = acp.getUserById;
    } else if (url === "/api/union/auth") {
        getUser = union.getUser;
        getUserIds = union.getUserIds;
        setUserData = union.setUserData;
        getUserByEmail = union.getUserByEmail;
        resetUserPassword = union.resetUserPassword;
        getUserById = union.getUserById;
    };
    return {
        getUser,
        setUserData,
        getUserByEmail,
        resetUserPassword,
        getUserIds,
        getUserById
    };
};

module.exports = {
    register: (req, res) => {
        handleRequest(req.baseUrl);
        const user_id = uuidv4();
        db.query(getUserIds, (err, data) => {
            if (err) return res.json(err);
            for (let i = 0; i < data.length; i++) {
                if (data[i].user_id === user_id) {
                    return res.json("User ID already exists");
                }
            };
            db.query(getUser, [req.body.email, req.body.first_name, req.body.last_name], (err, data) => {
                if (err) return res.json(err);
                if (data.length) return res.json("User already exists");
                if (req.body.password.length < 8) return res.status(403).json("Password must be at least 8 characters long!");

                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);

                const values = [
                    user_id,
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
        });
    },
    login: (req, res) => {
        handleRequest(req.baseUrl);
        console.log("Trying to login");
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
            console.log(token);
        });
    },
    logout: (req, res) => {
        handleRequest(req.baseUrl);
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true
        }).status(200).json("User logged out");
    },
    resetPassword: (req, res) => {
        handleRequest(req.baseUrl);
        try {
            db.query(getUserById, [req.params.id], (err, data) => {
                if (err) return res.json(err);
                console.log(req.body);
                const { id, token } = req.params;
                console.log(data);
                if (id !== data[0].user_id) return res.status(403).json("Invalid user ID");
                console.log("validated user ID");
                if (req.body.newPassword !== req.body.confirmPassword) return res.status(400).json("Passwords do not match");
                if (!req.body.newPassword || !req.body.confirmPassword) return res.status(400).json("Password is required");

                jwt.verify(token, process.env.SECRET, (err, decoded) => {
                    if (err) return res.status(403).json("Invalid token");
                    
                    console.log(req.body.newPassword);
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(req.body.newPassword, salt);

                    console.log("hashed out password");

                    console.log(hash, data[0].id);
                    console.log("successfully set values");

                    db.query(resetUserPassword, [hash, data[0].id], (err, data) => {
                        console.log("resetting password");
                        if (err) return res.json(err);
                        return res.status(200).json("Password reset");
                    });
                });
            });
        } catch (err) {
            console.log(err);
        };
    },
    forgotPassword: (req, res) => {
        handleRequest(req.baseUrl);
        try {
            db.query(getUserByEmail, [req.body.email], (err, data) => {
                if (err) return res.json(err);
                if (data.length === 0) return res.status(404).json("User not found");
                console.log(data[0].user_id);
                const token = jwt.sign({ id: data[0].user_id }, process.env.SECRET, { expiresIn: "1h" });
                sendEmail(req.body.email, "Password Reset", `http://localhost:3000/reset/${data[0].user_id}/${token}`);
            });
        } catch (err) {
            console.log(err);
        };
    }
};