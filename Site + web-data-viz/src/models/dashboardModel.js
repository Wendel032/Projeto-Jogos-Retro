var database = require("../database/config")

function contar() {
    var instrucao = `
        SELECT fkJogo AS numJogo, COUNT(fkJogo) AS vezesRecomendado FROM respostasQuiz GROUP BY NumJogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    contar
};