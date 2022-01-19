const path = require('path');

const controller = {
    lista: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "products", "list"))
    },

    carrito: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "products", "cart"))
    },

    detalle: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "products", "detail"))
    },

    crearProducto: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "products", "create"))
    },

    modificarProducto: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "products", "modify"))
    },

    guardarProducto: (req, res) => {
        res.send(req.body)
    }
}

module.exports = controller;