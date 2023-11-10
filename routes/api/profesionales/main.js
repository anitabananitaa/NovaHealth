var express = require('express');
var con = require("../conexion");
var router = express.Router();

router.get("/", function(req, res, next){
    const sql = 'SELECT * FROM profesionales WHERE activo = TRUE'; //Comillas simples
    con.query(sql, function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "profesionales ok",
                result
            })
        }
    })
})

router.post("/", function(req, res, next){
    const {apellido, nombre, dni, especialidad, telefono} = req.body;
    const sql = 'INSERT INTO profesionales (apellido, nombre, dni, especialidad, telefono) VALUES (?, ?, ?, ?, ?)'; //Comillas simples
    con.query(sql, [apellido, nombre, dni, especialidad, telefono], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "profesionales ok",
                msj: {apellido, nombre, dni, especialidad, telefono}
            })
        }
    })
})

router.put("/", function(req, res, next){
    const {ID_profesional} = req.query;
    const {apellido, nombre, dni, especialidad, telefono} = req.body;
    const sql = 'UPDATE profesionales SET apellido = ?, nombre = ?, dni = ?, especialidad = ?, telefono = ? WHERE ID_profesional = ?' //Comillas simples
    
    con.query(sql, [apellido, nombre, dni, especialidad, telefono, ID_profesional], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "profesionales ok",
                msj: {ID_profesional, apellido, nombre, dni, especialidad, telefono}
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
    const {ID_profesional} = req.query;
    
    isAdmin(token)
    .then((tipo) => {
        if (tipo === "admin"){
            const sql = 'UPDATE profesionales SET activo = FALSE WHERE ID_profesional = ?'; //Comillas simples
            con.query(sql, [ID_profesional], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "ok",
                        msj:"Eliminado ID #"+ID_profesional
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