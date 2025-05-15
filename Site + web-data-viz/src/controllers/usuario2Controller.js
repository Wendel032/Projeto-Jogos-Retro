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

module.exports = {
    cadastrar
}
