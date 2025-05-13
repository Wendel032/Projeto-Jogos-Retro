var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/contar", function (req, res) {
    dashboardController.contar(req, res);
});

module.exports = router;
