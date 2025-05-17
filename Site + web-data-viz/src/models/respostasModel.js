var database = require("../database/config")

function cadastrar(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, codigoAcesso, usuario, jogoRecomendado) {
    var instrucao = `
        INSERT INTO RespostasQuiz VALUES (DEFAULT, DEFAULT, '${resposta1}', '${resposta2}', '${resposta3}', '${resposta4}', '${resposta5}', '${resposta6}', '${codigoAcesso}', '${usuario}', '${jogoRecomendado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};
