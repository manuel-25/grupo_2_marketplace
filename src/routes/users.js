const express = require("express");
const router = express.Router();
const users = require('../controllers/usersController');

router.get("/login", users.login);

router.get("/register", users.register);

router.get("/profile", users.profile)

module.exports = router;