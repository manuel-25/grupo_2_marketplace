const express = require("express");
const app = express();
const path = require("path");

app.set("port", 3000);

app.listen(app.get("port"), () => console.log("Servidor Corriendo"));

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, './views', 'home.html')) });
app.get('/homesecundario', (req, res) => { res.sendFile(path.join(__dirname, './views', 'homesecundario.html')) });
app.get('/carro', (req, res) => { res.sendFile(path.join(__dirname, './views', 'carro.html')) });
app.get('/login', (req, res) => { res.sendFile(path.join(__dirname, './views', 'login.html')) });
app.get('/registrer', (req, res) => { res.sendFile(path.join(__dirname, './views', 'registrer.html')) });
app.get('/producto', (req, res) => { res.sendFile(path.join(__dirname, './views', 'producto.html')) });

app.use(express.static('./public'));