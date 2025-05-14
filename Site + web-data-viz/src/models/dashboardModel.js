var database = require("../database/config")

function contar() {
    var instrucao = `
        SELECT fkJogo AS numJogo, COUNT(fkJogo) AS vezesRecomendado FROM respostasQuiz GROUP BY NumJogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tempoMedio() {
    var instrucao = `
    SELECT ROUND(AVG(TIMESTAMPDIFF(SECOND, dtHoraCadastro, dtHorarioQuiz)), 0) AS tempo FROM RespostasQuiz JOIN Usuario
	ON idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function maisRecomendado() {
    var instrucao = `
    SELECT j.titulo maisRecomendado FROM Jogo j JOIN RespostasQuiz r 
	ON j.idJogo = r.fkJogo
	GROUP BY maisRecomendado
    ORDER BY COUNT(*) DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function generos() {
    var instrucao = `
    SELECT j.genero AS genero, count(*) AS vezesRecomendado FROM Jogo j JOIN RespostasQuiz r 
	ON j.idJogo = r.fkJogo
	GROUP BY genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    contar,
    tempoMedio,
    maisRecomendado,
    generos
};