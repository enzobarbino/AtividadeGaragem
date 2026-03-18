const express = require("express");
const morgan = require("morgan");
//const router = express.Router();
const app = express();
require('dotenv').config();

const garagemRoutes = require("./routes/garagem.routes");

app.use(morgan("dev"));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

const porta = Number(process.env.PORTA);

app.use("/", garagemRoutes);

app.use((req, res) => {
    res.status(404).render("Erro404", {title: "Error404"});
});

app.listen(porta, () => {
    console.log("Servidor rodando");
    console.log("Endereço:  http://localhost:" + porta);
});
