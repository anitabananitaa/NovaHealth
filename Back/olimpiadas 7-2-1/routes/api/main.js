var express = require('express');
var router = express.Router();

var llamadosRouter = require('./llamados/main');
var pacientesRouter = require('./pacientes/main');
var profesionalesRouter = require('./profesionales/main');
var usuariosRouter = require('./usuarios/main');
var zonasRouter = require('./zonas/main');

//http://localhost:3000/api/*
router.use("/llamados", llamadosRouter)
router.use("/pacientes", pacientesRouter)
router.use("/profesionales", profesionalesRouter)
router.use("/usuarios", usuariosRouter)
router.use("/zonas", zonasRouter)

module.exports = router;