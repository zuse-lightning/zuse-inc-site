const zuse = {
    getAllReviews: "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.zuse_users u JOIN zuse.zuse_reviews r ON u.id = r.uid WHERE rating >= 3;",
    getReviewById: "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.zuse_users u JOIN zuse.zuse_reviews r ON u.id = r.uid WHERE r.id = ?;",
    addUserReview: "INSERT INTO zuse.zuse_reviews (`uid`, `text`, `rating`, `date`, `image`) VALUES (?);",
    deleteUserReview: "DELETE FROM zuse.zuse_reviews WHERE `id` = ? AND `uid` = ?;",
    updateUserReview: "UPDATE zuse.zuse_reviews SET `text` = ?, `rating` = ?, `image` = ? WHERE `id` = ? AND `uid` = ?;"    
};

const acp = {
    getAllReviews: "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.acp_users u JOIN zuse.acp_reviews r ON u.id = r.uid WHERE rating >= 3;",
    getReviewById: "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.acp_users u JOIN zuse.acp_reviews r ON u.id = r.uid WHERE r.id = ?;",
    addUserReview: "INSERT INTO zuse.acp_reviews (`uid`, `text`, `rating`, `date`, `image`) VALUES (?);",
    deleteUserReview: "DELETE FROM zuse.acp_reviews WHERE `id` = ? AND `uid` = ?;",
    updateUserReview: "UPDATE zuse.acp_reviews SET `text` = ?, `rating` = ?, `image` = ? WHERE `id` = ? AND `uid` = ?;"    
};

const union = {
    getAllReviews: "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.union_users u JOIN zuse.union_reviews r ON u.id = r.uid WHERE rating >= 3;",
    getReviewById: "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.union_users u JOIN zuse.union_reviews r ON u.id = r.uid WHERE r.id = ?;",
    addUserReview: "INSERT INTO zuse.union_reviews (`uid`, `text`, `rating`, `date`, `image`) VALUES (?);",
    deleteUserReview: "DELETE FROM zuse.union_reviews WHERE `id` = ? AND `uid` = ?;",
    updateUserReview: "UPDATE zuse.union_reviews SET `text` = ?, `rating` = ?, `image` = ? WHERE `id` = ? AND `uid` = ?;"    
};

module.exports = {
    zuse,
    acp,
    union
};