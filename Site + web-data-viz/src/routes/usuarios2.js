var express = require("express");
var router = express.Router();

var usuario2Controller = require("../controllers/usuario2Controller");

router.post("/verificarEmail", function (req, res) {
    usuario2Controller.verificarEmail(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuario2Controller.cadastrar(req, res);
});

router.post("/atualizarHorario", function (req, res) {
    usuario2Controller.atualizarHorario(req, res);
});

module.exports = router;
