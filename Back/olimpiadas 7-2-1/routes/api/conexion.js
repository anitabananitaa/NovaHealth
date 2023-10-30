const mysql = require("mysql");
const conexion = mysql.createConnection({
    host:"ctpoba.ar",
    user:"ramosk",
    password:"45888244",
    database:"72_A"
})

conexion.connect();
module.exports = conexion;