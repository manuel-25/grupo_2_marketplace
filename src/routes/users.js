const express = require("express");
const router = express.Router();
const users = require('../controllers/usersController');
const path = require('path');
const multer = require('multer');

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

router.get("/login", users.login);

router.get("/register", users.register);

router.get("/profile/:idPerfil", users.profile);

router.put("/profile/:idPerfil", upload.single('imageProfile'), users.actualizarPerfil);

router.post('/register', users.crearUsuario);

module.exports = router;