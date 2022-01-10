const express = require("express");
const app = express();

const path = require("path");


//Modulos requeridos
const rutasUsers = require("./routes/users")
const rutasProductos = require('./routes/products');
const rutaHome = require("./routes/index");


app.set("port", 3000);
app.set("view engine", "ejs");


app.listen(app.get("port"), () => console.log("Servidor Corriendo"));

//Direcciones
app.use("/", rutaHome);
app.use("/", rutasUsers)
app.use("/", rutasProductos)


app.use(express.static('./public'));