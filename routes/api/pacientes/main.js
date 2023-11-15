var express = require('express');
var con = require("../conexion");
var router = express.Router();

router.get("/", function(req, res, next){
    const {documento} = req.query;
    let sql = ""; 
    if(documento!== undefined && documento !== null) {
        sql = 'SELECT * FROM pacientes WHERE activo = TRUE AND dni = ?'; //Comillas simples
    } else {
        sql = 'SELECT * FROM pacientes WHERE activo = TRUE'; //Comillas simples
    }
    
    con.query(sql, [documento], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "pacientes ok",
                result
            })
        }
    })
})



router.post("/", function(req, res, next){
    const {apellido, nombre, fecha_nac, dni, telefono} = req.body;
    const sql = 'INSERT INTO pacientes (apellido, nombre, fecha_nac, dni, telefono) VALUES (?, ?, ?, ?, ?)'; //Comillas simples
    con.query(sql, [apellido, nombre, fecha_nac, dni, telefono], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "pacientes ok",
                msj: {apellido, nombre, fecha_nac, dni, telefono}
            })
        }
    })
})

router.put("/", function(req, res, next){
    const {ID_paciente} = req.query;
    const {apellido, nombre, fecha_nac, dni, telefono} = req.body;
    const sql = 'UPDATE pacientes SET apellido = ?, nombre = ?, fecha_nac = ?, dni = ?, telefono = ? WHERE ID_paciente = ?' //Comillas simples
    
    con.query(sql, [apellido, nombre, fecha_nac, dni, telefono, ID_paciente], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "pacientes ok",
                msj: {ID_paciente, apellido, nombre, fecha_nac, dni, telefono}
            })
        }
    })
})

const isAdmin = function(token){
    return new Promise((resolve, reject) => {
        const sql = 'SELECT tipo FROM usuarios WHERE token = ?'; //Comillas simples
        con.query(sql, [token], function(error, result){
            if (error){
                reject(error);
            }else{
                if (result.length === 0) return(reject("No existe"));
                resolve(result[0].tipo);
            }
        })
    })
}

router.delete("/", function(req, res, next){
    const {token} = req.headers;
    const {ID_paciente} = req.query;
    
    isAdmin(token)
    .then((tipo) => {
        if (tipo === "admin"){
            const sql = 'UPDATE pacientes SET activo = FALSE WHERE ID_paciente = ?'; //Comillas simples
            con.query(sql, [ID_paciente], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "ok",
                        msj:"Eliminado ID #"+ID_paciente
                    })
                }
            })
        }else{
            res.json({
                status: "error",
                error:"Sin autorización"
            })
        }
    })
    .catch((error) => {
        res.json({
            status: "error",
            error
        })
    })
})

module.exports = router;
