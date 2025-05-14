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

function generos(req, res) {
    dashboardModel.generos().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    contar,
    tempoMedio,
    maisRecomendado,
    generos
}