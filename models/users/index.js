const zuse = {
    getUserByEmail: "SELECT * FROM zuse.zuse_users WHERE email = ?",
    getUserById: "SELECT * FROM zuse.zuse_users WHERE user_id = ?",
    getUserIds: "SELECT user_id FROM zuse.zuse_users",
    setUserData: "INSERT INTO zuse.zuse_users (user_id, first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM zuse.zuse_users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE zuse.zuse_users SET `password` = ? WHERE `id` = ?",
};

const acp = {
    getUserByEmail: "SELECT * FROM zuse.acp_users WHERE email = ?",
    getUserById: "SELECT * FROM zuse.acp_users WHERE user_id = ?",
    getUserIds: "SELECT user_id FROM zuse.acp_users",
    setUserData: "INSERT INTO zuse.acp_users (user_id, first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM zuse.acp_users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE zuse.acp_users SET `password` = ? WHERE `id` = ?"
};

const union = {
    getUserByEmail: "SELECT * FROM zuse.union_users WHERE email = ?",
    getUserById: "SELECT * FROM zuse.union_users WHERE user_id = ?",
    getUserIds: "SELECT user_id FROM zuse.union_users",
    setUserData: "INSERT INTO zuse.union_users (user_id, first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM zuse.union_users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE zuse.union_users SET `password` = ? WHERE `id` = ?"
};

module.exports = {
    zuse,
    acp,
    union
};