const router = require("express").Router();
const authRoutes = require("../authRoutes");
const reviewRoutes = require("../reviewRoutes");
const uploadRoutes = require("../uploadRoutes");
const careerRoutes = require("../careerRoutes");

router.use("/auth", authRoutes);
router.use("/reviews", reviewRoutes);
router.use("/upload", uploadRoutes);
router.use("/careers", careerRoutes);

module.exports = router;