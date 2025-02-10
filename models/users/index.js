let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getUserByEmail: `SELECT * FROM zuse_users WHERE email = ?`,
    getUserById: `SELECT * FROM zuse_users WHERE user_id = ?`,
    getUserIds: `SELECT user_id FROM zuse_users`,
    setUserData: `INSERT INTO zuse_users (user_id, first_name, last_name, email, password) VALUES (?)`,
    getUser: `SELECT * FROM zuse_users WHERE email = ? OR (first_name = ? AND last_name = ?)`,
    resetUserPassword: `UPDATE zuse_users SET password = ? WHERE id = ?`,
};

const acp = {
    getUserByEmail: `SELECT * FROM acp_users WHERE email = ?`,
    getUserById: `SELECT * FROM acp_users WHERE user_id = ?`,
    getUserIds: `SELECT user_id FROM acp_users`,
    setUserData: `INSERT INTO acp_users (user_id, first_name, last_name, email, password) VALUES (?)`,
    getUser: `SELECT * FROM acp_users WHERE email = ? OR (first_name = ? AND last_name = ?)`,
    resetUserPassword: `UPDATE acp_users SET password = ? WHERE id = ?`
};

const union = {
    getUserByEmail: `SELECT * FROM union_users WHERE email = ?`,
    getUserById: `SELECT * FROM union_users WHERE user_id = ?`,
    getUserIds: `SELECT user_id FROM union_users`,
    setUserData: `INSERT INTO union_users (user_id, first_name, last_name, email, password) VALUES (?)`,
    getUser: `SELECT * FROM union_users WHERE email = ? OR (first_name = ? AND last_name = ?)`,
    resetUserPassword: `UPDATE union_users SET password = ? WHERE id = ?`
};

module.exports = {
    zuse,
    acp,
    union
};