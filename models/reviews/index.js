let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getAllReviews: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.zuse_users u JOIN ${database}.zuse_reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`,
    getReviewById: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.zuse_users u JOIN ${database}.zuse_reviews r ON u.id = r.uid WHERE r.id = ?;`,
    addUserReview: `INSERT INTO ${database}.zuse_reviews (uid, text, rating, date, image) VALUES (?);`,
    deleteUserReview: `DELETE FROM ${database}.zuse_reviews WHERE id = ? AND uid = ?;`,
    updateUserReview: `UPDATE ${database}.zuse_reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`
};

const acp = {
    getAllReviews: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.acp_users u JOIN ${database}.acp_reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`,
    getReviewById: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.acp_users u JOIN ${database}.acp_reviews r ON u.id = r.uid WHERE r.id = ?;`,
    addUserReview: `INSERT INTO ${database}.acp_reviews (uid, text, rating, date, image) VALUES (?);`,
    deleteUserReview: `DELETE FROM ${database}.acp_reviews WHERE id = ? AND uid = ?;`,
    updateUserReview: `UPDATE ${database}.acp_reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`
};

const union = {
    getAllReviews: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.union_users u JOIN ${database}.union_reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`,
    getReviewById: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM ${database}.union_users u JOIN ${database}.union_reviews r ON u.id = r.uid WHERE r.id = ?;`,
    addUserReview: `INSERT INTO ${database}.union_reviews (uid, text, rating, date, image) VALUES (?);`,
    deleteUserReview: `DELETE FROM ${database}.union_reviews WHERE id = ? AND uid = ?;`,
    updateUserReview: `UPDATE ${database}.union_reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`
};

module.exports = {
    zuse,
    acp,
    union
};