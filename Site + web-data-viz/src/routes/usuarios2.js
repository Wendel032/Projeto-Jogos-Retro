var express = require("express");
var router = express.Router();

var usuario2Controller = require("../controllers/usuario2Controller");

router.post("/cadastrar", function (req, res) {
    usuario2Controller.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    usuario2Controller.listar(req, res);
});

module.exports = router;
