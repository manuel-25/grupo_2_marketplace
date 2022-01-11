const path = require('path');

const controller = {
    carrito: (req,res) =>{
        res.render(path.resolve(__dirname, "..", "views", "products", "cart"))
    },

    detalle: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "products", "detail"))
    },

    crearProducto: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "products", "create"))
    },

    modificarProducto: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "products", "modify"))
    }
}

module.exports = controller;