var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/contar", function (req, res) {
    dashboardController.contar(req, res);
});

router.get("/tempoMedio", function (req, res) {
    dashboardController.tempoMedio(req, res);
});

router.get("/maisRecomendado", function (req, res) {
    dashboardController.maisRecomendado(req, res);
});

router.get("/preferencias", function (req, res) {
    dashboardController.preferencias(req, res);
});

router.get("/acessos", function (req, res) {
    dashboardController.acessos(req, res);
});

router.post("/loginCodigo", function (req, res) {
    dashboardController.loginCodigo(req, res);
});

router.post("/loginEmailSenha", function (req, res) {
    dashboardController.loginEmailSenha(req, res);
});

module.exports = router;
