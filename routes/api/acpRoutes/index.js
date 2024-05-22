const router = require("express").Router();
const authRoutes = require("../authRoutes");
// const userRoutes = require("./userRoutes");
const reviewRoutes = require("../reviewRoutes");

router.use("/auth", authRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;