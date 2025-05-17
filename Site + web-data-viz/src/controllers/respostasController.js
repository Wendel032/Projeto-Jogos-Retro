var respostasModel = require("../models/respostasModel");

function cadastrar(req, res) {
    var resposta1 = req.body.r1Server;
    var resposta2 = req.body.r2Server;
    var resposta3 = req.body.r3Server;
    var resposta4 = req.body.r4Server;
    var resposta5 = req.body.r5Server;
    var resposta6 = req.body.r6Server;
    var codigoAcesso = req.body.codigoServer;
    var usuario = req.body.usuarioServer;
    var jogoRecomendado = req.body.jrServer;

    if (resposta1 == undefined) {
        res.status(400).send("Resposta1 está undefined!");
    }
    if (resposta2 == undefined) {
        res.status(400).send("Resposta2 está undefined!");
    }
    if (resposta3 == undefined) {
        res.status(400).send("Resposta3 está undefined!");
    }
    if (resposta4 == undefined) {
        res.status(400).send("Resposta4 está undefined!");
    }
    if (resposta5 == undefined) {
        res.status(400).send("Resposta5 está undefined!");
    }
    if (resposta6 == undefined) {
        res.status(400).send("Resposta6 está undefined!");
    }
    if (usuario == undefined) {
        res.status(400).send("O código está undefined!");
    }
    if (usuario == undefined) {
        res.status(400).send("O usuario está undefined!");
    }
    if (jogoRecomendado == undefined) {
        res.status(400).send("o jogo recomendado está undefined!");
    }



    respostasModel.cadastrar(resposta1, resposta2, resposta3, resposta4, resposta5, resposta6, codigoAcesso, usuario, jogoRecomendado).then(function (resposta) {
        res.status(200).send("Respostas criadas com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}
