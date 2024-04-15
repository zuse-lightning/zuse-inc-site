const router = require("express").Router();
const apiRoutes = require("./api");
console.log(apiRoutes);

router.use("/api", apiRoutes);

module.exports = router;