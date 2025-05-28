var database = require("../database/config")

function cadastrar(nome, email, senha) {
    var instrucao = `
        INSERT INTO Usuario (nomeUsuario, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};