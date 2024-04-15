const db = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUsersByEmail, setUserData, getUser } = require("../../models/users");

module.exports = {
    register: (req, res) => {
        db.query(getUsersByEmail, [req.body.email], (err, data) => {
            if (err) return res.json(err);
            if (data.length) return res.json("User already exists");

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt);

            const values = [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                hash
            ];

            db.query(setUserData, [values], (err, data) => {
                if (err) return res.json(err);
                return res.status(200).json("User registered");
            });
        });
    },
    login: (req, res) => {
        db.query(getUser, [req.body.email, req.body.first_name, req.body.last_name], (err, data) => {
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
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true
        }).status(200).json("User logged out");
    }
};