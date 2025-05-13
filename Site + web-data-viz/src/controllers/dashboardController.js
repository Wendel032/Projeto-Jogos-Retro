var dashboardModel = require("../models/dashboardModel");

function contar(req, res) {
    dashboardModel.contar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    contar
}