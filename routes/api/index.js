const router = require("express").Router();
const zuseRoutes = require("./zuseRoutes");
const acpRoutes = require("./acpRoutes");
const unionRoutes = require("./unionRoutes");

router.use("/zuse", zuseRoutes);
router.use("/acp", acpRoutes);
router.use("/union", unionRoutes);


module.exports = router;