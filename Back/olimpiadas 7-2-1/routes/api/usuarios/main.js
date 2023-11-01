var express = require('express');
var con = require("../conexion");
var router = express.Router();

const rand = function(){
    return Math.random().toString(36).substr(2);
};

const getToken = function(){
    return rand() + rand();
};

const getUsuario = function(user, pass){
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM usuarios WHERE nombre_usuario = ? AND contraseña = ?';
        con.query(sql, [user, pass], function(error, result){
            if (error) return (reject(error));
            if (result.length === 0) return (reject("No existe"));
            resolve(result[0]);
        })
    })
}

const setToken = function(ID_usuario, newToken){
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE usuarios SET token = ? WHERE ID_usuario = ?';
        con.query(sql, [newToken, ID_usuario], function(error, result){
            if (error) return (reject(error));
            resolve();
        })
    })
}

router.post("/login", function(req, res, next){
    const {user, pass} = req.body;

    //Validación de usuario
    getUsuario(user, pass)
    .then(async (user) => {
        const newToken = getToken();
        await setToken(user.ID_usuario, newToken);
        user.newToken = newToken;
        delete user.contraseña;
        res.json({
            status: "usuarios ok",
            user
        })
    })
    .catch((error) => {
        res.json({
            status: "error",
            error
        })
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

router.get("/", function(req, res, next){
    const {token} = req.headers;
    const {tipo, nombre_usuario, estado} = req.body;

    isAdmin(token)
    .then((tipo_ver) => {
        if (tipo_ver === "admin"){
            const sql = 'SELECT tipo, nombre_usuario, estado FROM zonas'; //Comillas simples
            con.query(sql, [tipo, nombre_usuario, estado], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "usuarios ok",
                        result
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

router.post("/", function(req, res, next){
    const {token} = req.headers;
    const {tipo, nombre_usuario, contraseña} = req.body;

    isAdmin(token)
    .then((tipo_ver) => {
        if (tipo_ver === "admin"){
            const sql = 'INSERT INTO usuarios (tipo, nombre_usuario, contraseña) VALUES (?, ?, ?)'; //Comillas simples
            con.query(sql, [tipo, nombre_usuario, contraseña], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "usuarios ok"
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

router.put("/", function(req, res, next){
    const {ID_usuario} = req.query;
    const {token} = req.headers;
    const {tipo, nombre_usuario, contraseña, estado} = req.body;

    isAdmin(token)
    .then((tipo_ver) => {
        if (tipo_ver === "admin"){
            const sql = 'UPDATE usuarios SET tipo = ?, nombre_usuario = ?, contraseña = ?, estado = ? WHERE ID_usuario = ?' //Comillas simples
            con.query(sql, [tipo, nombre_usuario, contraseña, estado, ID_usuario], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "usuarios ok"
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

router.delete("/", function(req, res, next){
    const {token} = req.headers;
    const {ID_usuario} = req.query;
    
    isAdmin(token)
    .then((tipo) => {
        if (tipo === "admin"){
            const sql = 'DELETE FROM usuarios WHERE ID_usuario = ?'; //Comillas simples
            con.query(sql, [ID_usuario], function(error, result){
                if (error){
                    res.json({
                        status: "error",
                        error
                    })
                }else{
                    res.json({
                        status: "usuarios ok",
                        msj:"Eliminado ID #"+ID_usuario
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