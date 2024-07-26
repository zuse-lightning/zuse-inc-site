const db = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { zuse, acp, union } = require("../../models/users");
const { sendEmail, mailTemplate } = require("../../controllers/emailController");

let getUser;
let setUserData;
let getUserByEmail;
let resetUserPassword;

const handleRequest = (url) => {
    if (url === "/api/zuse/auth") {
        getUser = zuse.getUser;
        setUserData = zuse.setUserData;
        getUserByEmail = zuse.getUserByEmail;
        resetUserPassword = zuse.resetUserPassword;
    } else if (url === "/api/acp/auth") {
        getUser = acp.getUser;
        setUserData = acp.setUserData;
        getUserByEmail = acp.getUserByEmail;
        resetUserPassword = acp.resetUserPassword;
    } else if (url === "/api/union/auth") {
        getUser = union.getUser;
        setUserData = union.setUserData;
        getUserByEmail = union.getUserByEmail;
        resetUserPassword = union.resetUserPassword;
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
    resetPassword: (req, res, email, resetToken, origin) => {
        handleRequest(req.baseUrl);
        res.json("reset password");
        console.log("heh, yeah, reset password and stuff, heh heh, cool, heh");

        let message;

        if (origin) {
            const resetUrl = `${origin}/reset?token=${resetToken}email=${email}`;
            message = `
                <p>Please click the below link to reset your password, the following link will be valid for only 1 hour:</p>
                <p><a href="${resetUrl}">${resetUrl}</a></p>
            `;
        } else {
            message = `
                <p>Please use the below token to reset your password with the <strong>/reset</strong> route:</p>
                <p><strong>Token:</strong> ${resetToken}</p>
            `;
        }

        sendEmail({
            email: req.body.email,
            subject: "Password Reset",
            message: message
        });
        // const token = req.cookies.access_token;
        // console.log(token);
        // if (!token) return res.status(401).json("Not authenticated!");
        // console.log("token verified");
        // jwt.verify(token, process.env.SECRET, (err, userInfo) => {
        //     if (err) return res.status(403).json("Invalid token!");

        //     db.query(getUserByEmail, [req.body.email], (err, data) => {
        //         if (err) return res.json(err);
        //         if (data.length === 0) return res.status(404).json("User not found");

        //         console.log(userInfo.id);

        //         const salt = bcrypt.genSaltSync(10);
        //         const hash = bcrypt.hashSync(req.body.password, salt);

        //         db.query(resetUserPassword, [req.body.email, hash ], (err, data) => {
        //             if (err) return res.json(err);
        //             return res.status(200).json("Password reset");
        //         });
        //     });
        // });
    },
    forgotPassword: (req, res) => {
        handleRequest(req.baseUrl);
        res.json("forgot password");
        console.log("uh, submitted email, or something, uh huh huh huh");
        db.query(getUserByEmail, [req.body.email], (err, data) => {
            if (err) return res.json(err);
            if (data.length === 0) return res.status(404).json("User not found");


        });
    }
};