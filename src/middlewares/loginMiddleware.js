const fs = require('fs');

function loginMiddleware(req, res, next) {



    next();
}

module.exports = loginMiddleware;