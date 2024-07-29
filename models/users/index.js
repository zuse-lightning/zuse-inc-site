const zuse = {
    getUserByEmail: "SELECT * FROM zuse.users WHERE email = ?",
    setUserData: "INSERT INTO zuse.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM zuse.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE zuse.users SET password = ? WHERE email = ?",
    insertResetToken: "INSERT INTO zuse.reset_password (email, token_value, created_at, expired_at, used) VALUES (?)",
    expireOldTokens: "UPDATE zuse.reset_password SET used = ? WHERE email = ?",
    findValidToken: "SELECT * FROM zuse.reset_password WHERE email = ? AND token_value = ? AND used = ? AND expired_at > ?"
};

const acp = {
    getUserByEmail: "SELECT * FROM american_contract.users WHERE email = ?",
    setUserData: "INSERT INTO american_contract.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM american_contract.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE american_contract.users SET password = ? WHERE email = ?",
    insertResetToken: "INSERT INTO american_contract.reset_password (email, token_value, created_at, expired_at, used) VALUES (?)",
    expireOldTokens: "UPDATE american_contract.reset_password SET used = ? WHERE email = ?"
};

const union = {
    getUserByEmail: "SELECT * FROM union_print.users WHERE email = ?",
    setUserData: "INSERT INTO union_print.users (first_name, last_name, email, password) VALUES (?)",
    getUser: "SELECT * FROM union_print.users WHERE email = ? OR (first_name = ? AND last_name = ?)",
    resetUserPassword: "UPDATE union_print.users SET password = ? WHERE email = ?",
    insertResetToken: "INSERT INTO union_print.reset_password (email, token_value, created_at, expired_at, used) VALUES (?)",
    expireOldTokens: "UPDATE union_print.reset_password SET used = ? WHERE email = ?"
};

module.exports = {
    zuse,
    acp,
    union
};