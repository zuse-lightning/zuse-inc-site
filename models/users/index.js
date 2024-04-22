const getUserByEmail = "SELECT * FROM zuse.users WHERE email = ?";
const setUserData = "INSERT INTO zuse.users (first_name, last_name, email, password) VALUES (?)";
const getUser = "SELECT * FROM zuse.users WHERE email = ? OR (first_name = ? AND last_name = ?)";

module.exports = {
    getUserByEmail,
    setUserData,
    getUser
};