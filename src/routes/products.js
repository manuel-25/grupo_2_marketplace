const express = require("express");
const router = express.Router();
const products = require('../controllers/productsController');
const comprobarNoLogueo = require('../middlewares/comprobarNoLogueo');
const verificarAdmin = require('../middlewares/verificarAdmin');
const verificarLogueo = require('../middlewares/verificarLogueo');


router.get("/cart", comprobarNoLogueo, products.carrito);
router.get("/detail/:id", products.detalleProducto);
router.get("/create", comprobarNoLogueo, verificarAdmin, products.crearProducto);
router.get("/:id/edit", comprobarNoLogueo, verificarAdmin, products.modificarProducto);
router.get("/", products.lista);

router.put('/:id', products.editar)

router.delete("/:id", products.borrar);

router.post('/create', products.guardarProducto)

module.exports = router;