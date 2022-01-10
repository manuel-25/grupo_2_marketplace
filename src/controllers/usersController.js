const path = require('path');

const controller = {
    index: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "users", "index"))
    },

    home_secundario: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "users", "home_secundario"))
    },

    login: (req, res) => {
        res.render(path.resolve(__dirname, "..", "views", "users", "login"))
    },

    register: (req, res) =>{
        res.render(path.resolve(__dirname, "..", "views", "users", "register"))
    }
}

module.exports = controller;