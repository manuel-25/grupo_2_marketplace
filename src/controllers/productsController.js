const path = require('path');

const controller = {
    carrito: (req,res) =>{
        res.render(path.resolve(__dirname, "..", "views", "products", "productCart"))
    },

    detalle: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "products", "productDetail"))
    },

    crearProducto: (req, res) =>{
        //Necesito la view del crear
    },

    modificarProducto: (req, res) =>{
        //Necesito la view del modificar
    }
}

module.exports = controller;