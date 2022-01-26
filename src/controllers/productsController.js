const path = require('path')
const product = require('../models/product')
const fs = require('fs');

const controller = {
    lista: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "home_secundario"), { productos: product.listar() }) },

    carrito: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "cart")) },

    detalle: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "detail")) },

    crearProducto: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "create")) },

    modificarProducto: (req, res) => { res.render(path.resolve(__dirname, "..", "views", "products", "modify")) },

    mostrarProducto: (req, res) => { 
        let listaProductos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/products.json")))
        if(listaProductos == undefined){
            listaProductos = [];
        } // Esto sirve que para cuando no hayan articulos para modificar, 
          //lo manda directamente al segundo if y como es undefined se cumple el else

        let productoDeseado = listaProductos[req.params.id]
        if(productoDeseado != undefined) {
             res.render(path.resolve(__dirname, "../views/products/detail"),  {product: productoDeseado} )
         }   else {
             res.render(path.resolve(__dirname, "../views/products/detail"),  {product: productoDeseado} )
         }



    },

    guardarProducto: (req, res) => {
        req.body.precio = parseFloat(req.body.precio)

        let result = product.guardar(req.body)
        return res.send(result)
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