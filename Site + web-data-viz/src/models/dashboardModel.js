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
    SELECT ROUND(AVG(TIMESTAMPDIFF(SECOND, dtHoraCadastro, dtHoraQuiz)), 0) AS tempo FROM RespostasQuiz JOIN Usuario
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

function acessos() {
    var instrucao = `
        SELECT COUNT(DISTINCT idUsuario) AS acessos, COUNT(idRespostasQuiz) AS respostas FROM Usuario LEFT JOIN RespostasQuiz ON idUsuario = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function login(codigo) {
    var instrucao = `
    SELECT nomeUsuario AS nome, idRespostasQuiz AS numeroQuiz, resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, codigo, TIMESTAMPDIFF(SECOND, dtHoraCadastro, dtHoraQuiz) AS tempo, fkjogo AS jogo FROM Usuario JOIN RespostasQuiz ON idUsuario = idRespostasQuiz WHERE codigo = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    contar,
    tempoMedio,
    maisRecomendado,
    generos,
    acessos,
    login
};

