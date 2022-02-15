const fs = require('fs');

function verificarLogueo(req, res, next) {

    if (req.session.userLogged != undefined) {
        return res.redirect('/users/profile')
    }

    next();
}

module.exports = verificarLogueo;