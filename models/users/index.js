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
    getUserById: "SELECT * FROM american_contract.users WHERE user_id = ?",
    getUserIds: "SELECT user_id FROM american_contract.users",
    setUserData: "INSERT INTO american_contract.users (user_id, first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM american_contract.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE american_contract.users SET `password` = ? WHERE `id` = ?"
};

const union = {
    getUserByEmail: "SELECT * FROM union_print.users WHERE email = ?",
    getUserById: "SELECT * FROM union_print.users WHERE user_id = ?",
    getUserIds: "SELECT user_id FROM union_print.users",
    setUserData: "INSERT INTO union_print.users (user_id, first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM union_print.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE union_print.users SET `password` = ? WHERE `id` = ?"
};

module.exports = {
    zuse,
    acp,
    union
};