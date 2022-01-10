const express = require("express");
const router = express.Router();
const users = require('../controllers/usersController');

router.get('/', users.index);

router.get("/homesecundario", users.home_secundario)

module.exports = router;