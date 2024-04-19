const getUserByEmail = "SELECT * FROM zuse.users WHERE email = ?";
const setUserData = "INSERT INTO users (first_name, last_name, email, password) VALUES (?)";
const getUser = "SELECT * FROM users WHERE email = ? AND first_name = ? AND last_name = ?";

module.exports = {
    getUserByEmail,
    setUserData,
    getUser
};