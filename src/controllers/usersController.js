const path = require('path');
const user = require('../models/user')
const fs = require('fs');
const bcrypt = require('bcryptjs')

const controller = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "users", "login"))
    },

    register: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "users", "register"))
    },
    profile: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "users", "profile"), { usuarioAMostrar: user.mostrar(req.params.idPerfil) })
    },

    crearUsuario: (req, res) => {

        if (req.body.clave == req.body.confirmar) {

            res.send('hay algo seleccionado')
            req.body.clave = bcrypt.hashSync(req.body.clave, 10);
            user.guardar(req.body)

            let nuevoId = user.mostrarPorEmail(req.body.email).id;

            let urlRedireccionar = '/users/profile/' + nuevoId;

            res.redirect(urlRedireccionar);

        } else {
            res.send('Las constraseñas no son iguales')
        }

    }
}

module.exports = controller;