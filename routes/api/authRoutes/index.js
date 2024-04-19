const router = require("express").Router();
const { login, logout, register, test } = require("../../../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/test", test);

module.exports = router;