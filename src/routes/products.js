const express = require("express");
const router = express.Router();
const products = require('../controllers/productsController');

router.get("/productCart", products.carrito)

router.get("/productDetail", products.detalle)

module.exports = router;