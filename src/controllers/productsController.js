const path = require('path')
const product = require('../models/product')
const fs = require('fs');

const controller = {
    lista: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "home_secundario"), { productos: product.listar() }) },

    carrito: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "cart")) },

    detalle: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "detail")) },

    crearProducto: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "create")) },

    modificarProducto: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "modify"), { productoAModificar: product.mostrar(req.params.id) }) },

    detalleProducto: (req, res) => {

        let productoDeseado = product.mostrar(req.params.id);

        if (productoDeseado == undefined) {
            productoDeseado = null
            res.render(path.resolve(__dirname, "../views/products/detail"), { productoAMostrar: productoDeseado })
        } else {
            res.render(path.resolve(__dirname, "../views/products/detail"), { productoAMostrar: productoDeseado })
        }


    },

    guardarProducto: (req, res) => {
        req.body.precio = parseFloat(req.body.precio)

        product.guardar(req.body)

        res.redirect('/products');
    },

    editar: (req, res) => {
        product.modificar(req, res);

        let urlARedireccionar = '/products/detail/' + req.params.id;

        res.redirect(urlARedireccionar);
    },

    borrar: (req, res) => {

        product.eliminar(req, res);
        res.redirect('/products');

    }
}

module.exports = controller;