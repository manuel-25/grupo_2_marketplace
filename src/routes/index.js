const express = require("express");
const router = express.Router();
const index = require('../controllers/indexController');

router.get('/', index.index);

router.get("/homesecundario", index.home_secundario)

module.exports = router;