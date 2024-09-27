const { db } = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { zuse, acp, union } = require("../../models/users");
// const { sendEmail, sendPasswordResetEmail, validateResetToken } = require("../../controllers/emailController");

let getUser;
let getUserIds;
let setUserData;
let getUserByEmail;
let resetUserPassword;
let expireOldTokens;
let insertResetToken;

const handleRequest = (url) => {
    if (url === "/api/zuse/auth") {
        getUser = zuse.getUser;
        getUserIds = zuse.getUserIds;
        setUserData = zuse.setUserData;
        getUserByEmail = zuse.getUserByEmail;
        resetUserPassword = zuse.resetUserPassword;
        expireOldTokens = zuse.expireOldTokens;
        insertResetToken = zuse.insertResetToken;
    } else if (url === "/api/acp/auth") {
        getUser = acp.getUser;
        setUserData = acp.setUserData;
        getUserByEmail = acp.getUserByEmail;
        resetUserPassword = acp.resetUserPassword;
        expireOldTokens = acp.expireOldTokens;
        insertResetToken = acp.insertResetToken;
    } else if (url === "/api/union/auth") {
        getUser = union.getUser;
        setUserData = union.setUserData;
        getUserByEmail = union.getUserByEmail;
        resetUserPassword = union.resetUserPassword;
        expireOldTokens = union.expireOldTokens;
        insertResetToken = union.insertResetToken;
    };
    return {
        getUser,
        setUserData,
        getUserByEmail,
        resetUserPassword
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
    resetPassword: async (req, res) => {
        handleRequest(req.baseUrl);
        res.json("reset password");
        console.log("heh, yeah, reset password and stuff, heh heh, cool, heh");

        try {
            const newPassword = req.body.newPassword;
            const confirmPassword = req.body.confirmPassword;
            const email = req.body.email;

            if (newPassword !== confirmPassword) return res.status(400).json("Passwords do not match!");
            if (!newPassword || !confirmPassword) return res.status(400).json("Password is required!");

            const user = db.query(getUserByEmail, [email], (err, data) => {
                if (err) return res.json(err);
                if (data.length === 0) return res.status(404).json("User not found");
                return data;
            });

            const salt = bcrypt.genSaltSync(10);
            const password = bcrypt.hashSync(newPassword, salt);

            await db.query(resetUserPassword, [password, email], (err, data) => {
                if (err) return res.json(err);
                return res.status(200).json("Password reset");
            });
        } catch (err) {
            console.log(err);
        };
    },
    forgotPassword: async (req, res, next) => {
        handleRequest(req.baseUrl);
        res.json("forgot password");
        console.log("uh, submitted email, or something, uh huh huh huh");
        try {
            db.query(getUserByEmail, [req.body.email], (err, data) => {
                if (err) return res.json(err);
                if (data.length === 0) return res.status(404).json("User not found");
                console.log(data[0].user_id);
            });
        } catch (err) {
            console.log(err);
        };
    }
};