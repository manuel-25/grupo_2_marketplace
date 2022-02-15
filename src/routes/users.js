const express = require("express");
const router = express.Router();
const users = require('../controllers/usersController');
const path = require('path');
const multer = require('multer');
const verificarLogueo = require('../middlewares/verificarLogueo');
const comprobarNoLogueo = require('../middlewares/comprobarNoLogueo');
const { body } = require('express-validator');

const validacionFormLogin = [
    body('email').notEmpty().withMessage('Ingresar email'),
    body('email').isEmail().withMessage('Ingresar email valido'),
    body('clave').notEmpty().withMessage('Ingresar clave')
]

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/img/users'))
    },
    filename: (req, file, cb) => {

        const nombreArchivo = "profile-" + Date.now() + path.extname(file.originalname);

        cb(null, nombreArchivo);
    }
})

const upload = multer({ storage })

router.get("/login", verificarLogueo, users.login);

router.post("/login", validacionFormLogin, users.validarLogin);

router.get("/profile", comprobarNoLogueo, users.profile);

router.put("/profile", upload.single('imageProfile'), users.actualizarPerfil);

router.get("/register", verificarLogueo, users.register);

router.post('/register', users.crearUsuario);

module.exports = router;