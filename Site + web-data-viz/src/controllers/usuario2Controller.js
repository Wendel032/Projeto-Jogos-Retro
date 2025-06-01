var usuario2Model = require("../models/usuario2Model");

function verificarEmail(req, res) {
    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    usuario2Model.verificarEmail(email).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    if (senha == undefined) {
        res.status(400).send("Seu senha está undefined!");
    }

    usuario2Model.cadastrar(nome, email, senha).then(function (resposta) {
        res.status(200).send("usuario criado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    verificarEmail,
    cadastrar
}
