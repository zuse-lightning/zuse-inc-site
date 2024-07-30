const router = require("express").Router();
const { login, logout, register, resetPassword, forgotPassword } = require("../../../controllers/authController");
const { validateResetToken } = require("../../../controllers/emailController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/reset", validateResetToken, resetPassword);
router.post("/forgot", forgotPassword);

module.exports = router;