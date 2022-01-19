const express = require("express");
const app = express();
const method = require('method-override')
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
app.use("/users", rutasUsers)
app.use("/products", rutasProductos)


app.use(express.static(path.resolve(__dirname, '..', 'public'))) 
app.use(express.urlencoded({extended:true}))    
app.use(method('m'))  