var database = require("../database/config")

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO Usuario (nomeUsuario) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar() {
    var instrucao = `
        SELECT COUNT(DISTINCT idUsuario) AS acessos, COUNT(idRespostasQuiz) AS respostas FROM Usuario LEFT JOIN RespostasQuiz ON idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};