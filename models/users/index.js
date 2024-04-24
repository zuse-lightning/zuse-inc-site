const zuse = {
    getUserByEmail: "SELECT * FROM zuse.users WHERE email = ?",
    setUserData: "INSERT INTO zuse.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM zuse.users WHERE email = ? OR (first_name = ? AND last_name = ?)"
};

const acp = {
    getUserByEmail: "SELECT * FROM american_contract.users WHERE email = ?",
    setUserData: "INSERT INTO american_contract.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM american_contract.users WHERE email = ? OR (first_name = ? AND last_name = ?)"
};

const union = {
    getUserByEmail: "SELECT * FROM union_print.users WHERE email = ?",
    setUserData: "INSERT INTO union_print.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM union_print.users WHERE email = ? OR (first_name = ? AND last_name = ?)"
};

const getUserByEmail = "SELECT * FROM zuse.users WHERE email = ?";
const setUserData = "INSERT INTO zuse.users (first_name, last_name, email, password) VALUES (?)";
const getUser = "SELECT * FROM zuse.users WHERE email = ? OR (first_name = ? AND last_name = ?)";

module.exports = {
    getUserByEmail,
    setUserData,
    getUser
};