const express = require("express");
const router = express.Router();
const products = require('../controllers/productsController');

router.get("/cart", products.carrito)

router.get("/:id", products.detalle)

router.get("/create", products.crearProducto)

router.get("/:id/edit", products.modificarProducto);

router.get("/", products.lista);

//router.post("", products.crear);

router.put("/:id", products.editar)

router.delete("/:id", products.borrar)

module.exports = router;