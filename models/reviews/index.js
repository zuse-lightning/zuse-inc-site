const getAllReviews = "SELECT * FROM reviews;";
const getReviewByIds = "SELECT r.id, `first_name`, `last_name`, `text`, `rating`, `date` FROM users u JOIN reviews r ON u.id = r.uid WHERE r.id = ?;";
const addUserReview = "INSERT INTO reviews (`uid`, `text`, `rating`, `date`) VALUES (?);";
const deleteUserReview = "DELETE FROM reviews WHERE `id` = ? AND `uid` = ?;";
const updateUserReview = "UPDATE reviews SET `text` = ?, `rating` = ? WHERE `id` = ? AND `uid` = ?;";

module.exports = {
    getAllReviews,
    getReviewByIds,
    addUserReview,
    deleteUserReview,
    updateUserReview
};