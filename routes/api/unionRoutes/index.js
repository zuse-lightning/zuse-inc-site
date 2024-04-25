const router = require("express").Router();
const authRoutes = require("../authRoutes");
// const userRoutes = require("./userRoutes");
// const reviewRoutes = require("./reviewRoutes");

router.use("/auth", authRoutes);

module.exports = router;