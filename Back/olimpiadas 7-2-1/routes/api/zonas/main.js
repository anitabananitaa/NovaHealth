var express = require('express');
var con = require("../conexion");
var router = express.Router();

router.get("/", function(req, res, next){
    const sql = 'SELECT * FROM zonas WHERE activo = TRUE'; //Comillas simples
    con.query(sql, function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "zonas ok",
                result
            })
        }
    })
})

router.post("/", function(req, res, next){
    const {descripcion, tipo} = req.body;
    const sql = 'INSERT INTO zonas (descripcion, tipo) VALUES (?, ?)'; //Comillas simples
    con.query(sql, [descripcion, tipo], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "zonas ok",
                msj: {descripcion, tipo}
            })
        }
    })
})

router.put("/", function(req, res, next){
    const {ID_zonas} = req.query;
    const {descripcion, tipo} = req.body;
    const sql = 'UPDATE zonas SET descripcion = ?, tipo = ? WHERE ID_zonas = ?' //Comillas simples
    
    con.query(sql, [descripcion, tipo, ID_zonas], function(error, result){
        if (error){
            console.log(error);
            res.json({
                status: "error",
                error
            })
        }else{
            res.json({
                status: "zonas ok",
                msj: {ID_zonas, descripcion, tipo}
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
    const {ID_zonas} = req.query;

    isAdmin(token)
    .then((tipo) => {
        if (tipo === "admin"){
            const sql = 'UPDATE zonas SET activo = FALSE WHERE ID_zonas = ?'; 
            con.query(sql, [ID_zonas], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "zonas ok",
                        msj:"Eliminado ID #"+ID_zonas
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