var usuario2Model = require("../models/usuario2Model");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

    usuario2Model.cadastrar(nome).then(function(resposta){
        res.status(200).send("usuario criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listar(req, res) {
    usuario2Model.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar,
    listar
}
