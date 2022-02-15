const fs = require('fs');

function verificarAdmin(req, res, next) {

    if (req.session.userLogged.esAdmin == false) {
        return res.redirect('/')
    }

    next();

}

module.exports = verificarAdmin;