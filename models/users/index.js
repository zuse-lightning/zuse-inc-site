const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model("user", userSchema);

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required()
    });

    return schema.validate(user);
};

const zuse = {
    getUserByEmail: "SELECT * FROM zuse.users WHERE email = ?",
    getUserById: "SELECT * FROM zuse.users WHERE user_id = ?",
    getUserIds: "SELECT user_id FROM zuse.users",
    setUserData: "INSERT INTO zuse.users (user_id, first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM zuse.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE zuse.users SET `password` = ? WHERE `id` = ?",
};

const acp = {
    getUserByEmail: "SELECT * FROM american_contract.users WHERE email = ?",
    setUserData: "INSERT INTO american_contract.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM american_contract.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE american_contract.users SET password = ? WHERE email = ?"
};

const union = {
    getUserByEmail: "SELECT * FROM union_print.users WHERE email = ?",
    setUserData: "INSERT INTO union_print.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM union_print.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE union_print.users SET `password` = ? WHERE `email` = ?"
};

module.exports = {
    zuse,
    acp,
    union
};