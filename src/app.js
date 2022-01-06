const express = require("express");
const app = express();
const path = require("path");

app.set("port", 3000);
app.set("view engine", "ejs");

app.listen(app.get("port"), () => console.log("Servidor Corriendo"));

app.get('/', (req, res) => { res.render(path.join(__dirname, "./views", "users", "index")) });
app.get('/homesecundario', (req, res) => { res.render(path.join(__dirname, './views',"users", 'home_secundario')) });
app.get('/productCart', (req, res) => { res.render(path.join(__dirname, './views',"products", 'productCart')) });
app.get('/login', (req, res) => { res.render(path.join(__dirname, './views',"users", 'login')) });
app.get('/register', (req, res) => { res.render(path.join(__dirname, './views',"users", 'register')) });
app.get('/productDetail', (req, res) => { res.render(path.join(__dirname, './views',"products", 'productDetail')) });

app.use(express.static('./public'));