const db = require("../db/dbConnect");

class Garagem {
    static async readAllGaragem(){
        console.log("garagem.model.js", "readAllGaragem()");
        const query = "select date_format(data, '%d/%m/%y') data, placa, modelo, entrada, saida from garagem; ";
        return db.executarQuery(query);
    }
}

Garagem.readAllGaragem();

module.exports = Garagem;