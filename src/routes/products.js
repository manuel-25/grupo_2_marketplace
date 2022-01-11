const express = require("express");
const router = express.Router();
const products = require('../controllers/productsController');

router.get("/cart", products.carrito)

router.get("/detail", products.detalle)

router.get("/create", products.crearProducto)

router.get("/modify", products.modificarProducto);

module.exports = router;