var dashboardModel = require("../models/dashboardModel");

function contar(req, res) {
    dashboardModel.contar().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function tempoMedio(req, res) {
    dashboardModel.tempoMedio().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function maisRecomendado(req, res) {
    dashboardModel.maisRecomendado().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function preferencias(req, res) {
    dashboardModel.preferencias().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function acessos(req, res) {
    dashboardModel.acessos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function loginCodigo(req, res) {
    var codigo = req.body.codigoServer;

    if (codigo == undefined) {
        res.status(400).send("Seu código está undefined!");
    }

    dashboardModel.loginCodigo(codigo).then(function (resultado) {
        console.log(resultado);
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function loginEmailSenha(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }

    if (senha == undefined) {
        res.status(400).send("Seu senha está undefined!");
    }

    dashboardModel.loginEmailSenha(email, senha).then(function (resultado) {
        console.log(resultado);
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    contar,
    tempoMedio,
    maisRecomendado,
    preferencias,
    acessos,
    loginCodigo,
    loginEmailSenha
}