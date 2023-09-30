var express = require('express');
var con = require("../conexion");
var router = express.Router();

/*
Get: /, /tipo, /estado, /zona
Post (estado: Pendiente): ID_llamado, ID_zona, ID_paciente, fecha_hora_llamado(Auto), tipo_de_llamado, origen
Put (estado: Atendido): ID_profesional, fecha_hora_atencion
Put (estado: Finalizado): diagnostico, tratamiento
*/

router.get("/", function(req, res, next){
    const {ID_zona, tipo_de_llamado, estado} = req.query;
    let sql = "";
    let valor = [];

    if(ID_zona!== undefined && ID_zona!== null) {
        valor = [ID_zona];
        sql = 'SELECT * FROM llamados WHERE ID_zona = ?'; //Comillas simples
    }else if(tipo_de_llamado!== undefined && tipo_de_llamado!== null) {
        valor = [tipo_de_llamado];
        sql = 'SELECT * FROM llamados WHERE tipo_de_llamado = ?'; //Comillas simples
    }else if(estado!== undefined && estado!== null) {
        valor = [estado];
        sql = 'SELECT * FROM llamados WHERE estado = ?'; //Comillas simples
    }else {
        sql = 'SELECT * FROM llamados'; //Comillas simples
    }

    con.query(sql, valor, function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "llamados ok",
                llamados: result
            })
        }
    })
})

router.post("/", function(req, res, next){
    const {ID_zona, ID_paciente, tipo_de_llamado, origen} = req.body;
    const sql = 'INSERT INTO llamados (ID_zona, ID_paciente, tipo_de_llamado, origen) VALUES (?, ?, ?, ?)'; //Comillas simples
    con.query(sql, [ID_zona, ID_paciente, tipo_de_llamado, origen], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "Llamado Pendiente",
                msj: {ID_zona, ID_paciente, tipo_de_llamado, origen}
            })
        }
    })
})

router.put("/atender", function(req, res, next){
    const {ID_llamado} = req.query;
    const {ID_profesional} = req.body;
    const sql = 'UPDATE llamados SET ID_profesional = ?, fecha_hora_atencion = NOW(), estado = "Atendiendo" WHERE ID_llamado = ?' //Comillas simples
    
    con.query(sql, [ID_profesional, ID_llamado], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "Atendiendo Llamado",
                msj: {ID_llamado, ID_profesional}
            })
        }
    })
})

router.put("/finalizar", function(req, res, next){ /*PUT Finalizado, Falta estado*/
    const {ID_llamado} = req.query;
    const {diagnostico, tratamiento} = req.body;
    const sql = 'UPDATE llamados SET diagnostico = ?, tratamiento = ?, estado = "Finalizado" WHERE ID_llamado = ?' //Comillas simples
    
    con.query(sql, [diagnostico, tratamiento, ID_llamado], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "Llamado Finalizado",
                msj: {ID_llamado, diagnostico, tratamiento}
            })
        }
    })
})

module.exports = router;