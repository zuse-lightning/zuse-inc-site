const router = require("express").Router();
const { login, logout, register } = require("../../../controllers/authController");

router.get("/register", register);
router.get("/login", login);
router.get("/logout", logout);

module.exports = router;