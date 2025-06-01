var database = require("../database/config")

function verificarEmail(email) {
    var instrucao = `
    SELECT idUsuario FROM USUARIO WHERE email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
    var instrucao = `
    INSERT INTO Usuario (nomeUsuario, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    verificarEmail,
    cadastrar
};