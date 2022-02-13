const express = require("express");
const router = express.Router();
const users = require('../controllers/usersController');

router.get("/login", users.login);

router.get("/register", users.register);

router.get("/profile/:idPerfil", users.profile);

router.post('/register', users.crearUsuario);

module.exports = router;