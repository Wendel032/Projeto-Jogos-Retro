var database = require("../database/config")

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO Usuario (nomeUsuario) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};