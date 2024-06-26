const zuse = {
    getAllReviews: "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM zuse.users u JOIN zuse.reviews r ON u.id = r.uid;",
    getReviewByIds: "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM zuse.users u JOIN zuse.reviews r ON u.id = r.uid WHERE r.id = ?;",
    addUserReview: "INSERT INTO zuse.reviews (`uid`, `text`, `rating`, `date`) VALUES (?);",
    deleteUserReview: "DELETE FROM zuse.reviews WHERE `id` = ? AND `uid` = ?;",
    updateUserReview: "UPDATE zuse.reviews SET `text` = ?, `rating` = ? WHERE `id` = ? AND `uid` = ?;"    
};

const acp = {
    getAllReviews: "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM american_contract.users u JOIN american_contract.reviews r ON u.id = r.uid;",
    getReviewByIds: "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM american_contract.users u JOIN american_contract.reviews r ON u.id = r.uid WHERE r.id = ?;",
    addUserReview: "INSERT INTO american_contract.reviews (`uid`, `text`, `rating`, `date`) VALUES (?);",
    deleteUserReview: "DELETE FROM american_contract.reviews WHERE `id` = ? AND `uid` = ?;",
    updateUserReview: "UPDATE american_contract.reviews SET `text` = ?, `rating` = ? WHERE `id` = ? AND `uid` = ?;"    
};

const union = {
    getAllReviews: "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM union_print.users u JOIN union_print.reviews r ON u.id = r.uid;",
    getReviewByIds: "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM union_print.users u JOIN union_print.reviews r ON u.id = r.uid WHERE r.id = ?;",
    addUserReview: "INSERT INTO union_print.reviews (`uid`, `text`, `rating`, `date`) VALUES (?);",
    deleteUserReview: "DELETE FROM union_print.reviews WHERE `id` = ? AND `uid` = ?;",
    updateUserReview: "UPDATE union_print.reviews SET `text` = ?, `rating` = ? WHERE `id` = ? AND `uid` = ?;"    
};

module.exports = {
    zuse,
    acp,
    union
};