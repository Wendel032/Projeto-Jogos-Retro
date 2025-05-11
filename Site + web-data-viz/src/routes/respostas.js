var express = require("express");
var router = express.Router();

var respostasController = require("../controllers/respostasController");

router.post("/cadastrar", function (req, res) {
    respostasController.cadastrar(req, res);
})

module.exports = router;