let database;

if (process.env.NODE_ENV === "production") {
    database = process.env.PROD_DB_NAME;
} else if (process.env.NODE_ENV === "development") {
    database = process.env.DEV_DB_NAME;
}

const zuse = {
    getAllReviews: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM zuse_users u JOIN zuse_reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`,
    getReviewById: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM zuse_users u JOIN zuse_reviews r ON u.id = r.uid WHERE r.id = ?;`,
    addUserReview: `INSERT INTO zuse_reviews (uid, text, rating, date, image) VALUES (?);`,
    deleteUserReview: `DELETE FROM zuse_reviews WHERE id = ? AND uid = ?;`,
    updateUserReview: `UPDATE zuse_reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`
};

const acp = {
    getAllReviews: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM acp_users u JOIN acp_reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`,
    getReviewById: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM acp_users u JOIN acp_reviews r ON u.id = r.uid WHERE r.id = ?;`,
    addUserReview: `INSERT INTO acp_reviews (uid, text, rating, date, image) VALUES (?);`,
    deleteUserReview: `DELETE FROM acp_reviews WHERE id = ? AND uid = ?;`,
    updateUserReview: `UPDATE acp_reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`
};

const union = {
    getAllReviews: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM union_users u JOIN union_reviews r ON u.id = r.uid WHERE rating >= ? ORDER BY date DESC;`,
    getReviewById: `SELECT r.id, r.uid, first_name, last_name, text, rating, date, image FROM union_users u JOIN union_reviews r ON u.id = r.uid WHERE r.id = ?;`,
    addUserReview: `INSERT INTO union_reviews (uid, text, rating, date, image) VALUES (?);`,
    deleteUserReview: `DELETE FROM union_reviews WHERE id = ? AND uid = ?;`,
    updateUserReview: `UPDATE union_reviews SET text = ?, rating = ?, image = ? WHERE id = ? AND uid = ?;`
};

module.exports = {
    zuse,
    acp,
    union
};