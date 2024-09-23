const { db } = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { zuse, acp, union } = require("../../models/users");
// const { sendEmail, sendPasswordResetEmail, validateResetToken } = require("../../controllers/emailController");

let getUser;
let setUserData;
let getUserByEmail;
let resetUserPassword;
let expireOldTokens;
let insertResetToken;

const handleRequest = (url) => {
    if (url === "/api/zuse/auth") {
        getUser = zuse.getUser;
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
            const email = req.body.email;
            const origin = req.header("Origin");

            const user = await db.query(getUserByEmail, [email], (err, data) => {
                if (err) return res.json(err);
                if (data.length === 0) return res.status(404).json("User not found");
                return data.values;
            });

            console.log(user.values[0]);

            if (!user) return res.json({ status: "ok"});
            await db.query(expireOldTokens, [email, req.body.used], (err, data) => {
                if (err) return res.json(err);
                return data;
            });

            const resetToken = crypto.randomBytes(40).toString("hex");
            const resetTokenExpires = new Date(Date.now() + 3600000);
            const createdAt = new Date(Date.now());
            const expiredAt = resetTokenExpires;

            await db.query(insertResetToken, [email, resetToken, createdAt, expiredAt, req.body.used], (err, data) => {
                if (err) return res.json(err);
                return data;
            });

            await sendPasswordResetEmail(email, resetToken, origin);
            res.json({ message: "Please check email for a new password"});
            console.log("Check email for new password");
        } catch (err) {
            console.log(err);
        };
    }
};