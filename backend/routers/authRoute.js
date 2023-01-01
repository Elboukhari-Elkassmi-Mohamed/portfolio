const router = require("express").Router();

const authController = require("../controllers/authController");

// api/auth/login
router.post("/login",authController.login);

//api/auth/logout
router.get("/logout", authController.logout);


module.exports = router;
