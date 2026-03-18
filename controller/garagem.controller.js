const garagemModel = require("../models/garagem.model.js");

const mostrarGaragem =  (req, res) => {
    garagemModel.readAllGaragem().then((garagem) => {
    res.render("index", { title: "principal", dados: garagem});
});
};

const criarGaragem = (req, res) => {
    res.end("");
};

const editarGaragem = (req, res) => {
     res.end("");
};

const deletarGaragem = (req, res) => {
     res.end("");
};

module.exports = {
    criarGaragem,
    mostrarGaragem,
    editarGaragem,
    deletarGaragem
};