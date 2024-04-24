const router = require("express").Router();
const authRoutes = require("./authRoutes");
// const reviewRoutes = require("./reviewRoutes");

router.use("/zuse/auth", authRoutes);
router.use("/acp/auth", authRoutes);
router.use("/union/auth", authRoutes);
// router.use("/reviews", reviewRoutes);

module.exports = router;