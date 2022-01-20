const path = require('path')
const product = require('../models/product')

const controller = {
    lista: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "home_secundario"), { productos: product.listar() }) },

    carrito: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "cart")) },

    detalle: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "detail")) },

    crearProducto: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "create")) },

    modificarProducto: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "modify")) },

    guardarProducto: (req, res) => {
        req.body.precio = parseFloat(req.body.precio)

        let result = product.guardar(req.body)
        return res.send(result)
    }
}

module.exports = controller;