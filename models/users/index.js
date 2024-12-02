let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getUserByEmail: `SELECT * FROM ${database}.zuse_users WHERE email = ?`,
    getUserById: `SELECT * FROM ${database}.zuse_users WHERE user_id = ?`,
    getUserIds: `SELECT user_id FROM ${database}.zuse_users`,
    setUserData: `INSERT INTO ${database}.zuse_users (user_id, first_name, last_name, email, password) VALUES (?)`,
    getUser: `SELECT * FROM ${database}.zuse_users WHERE email = ? OR (first_name = ? AND last_name = ?)`,
    resetUserPassword: `UPDATE ${database}.zuse_users SET password = ? WHERE id = ?`,
};

const acp = {
    getUserByEmail: `SELECT * FROM ${database}.acp_users WHERE email = ?`,
    getUserById: `SELECT * FROM ${database}.acp_users WHERE user_id = ?`,
    getUserIds: `SELECT user_id FROM ${database}.acp_users`,
    setUserData: `INSERT INTO ${database}.acp_users (user_id, first_name, last_name, email, password) VALUES (?)`,
    getUser: `SELECT * FROM ${database}.acp_users WHERE email = ? OR (first_name = ? AND last_name = ?)`,
    resetUserPassword: `UPDATE ${database}.acp_users SET password = ? WHERE id = ?`
};

const union = {
    getUserByEmail: `SELECT * FROM ${database}.union_users WHERE email = ?`,
    getUserById: `SELECT * FROM ${database}.union_users WHERE user_id = ?`,
    getUserIds: `SELECT user_id FROM ${database}.union_users`,
    setUserData: `INSERT INTO ${database}.union_users (user_id, first_name, last_name, email, password) VALUES (?)`,
    getUser: `SELECT * FROM ${database}.union_users WHERE email = ? OR (first_name = ? AND last_name = ?)`,
    resetUserPassword: `UPDATE ${database}.union_users SET password = ? WHERE id = ?`
};

module.exports = {
    zuse,
    acp,
    union
};