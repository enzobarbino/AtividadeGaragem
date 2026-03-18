const express = require("express");
const garagemController = require("../controller/garagem.controller");
const router = express.Router();

router.get("/", garagemController.mostrarGaragem);

module.exports = router;
