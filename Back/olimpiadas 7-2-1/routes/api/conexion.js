const mysql = require("mysql");
const conexion = mysql.createConnection({
    host:"192.168.0.30",
    user:"721",
    password:"123456",
    database:"7-2-1"
})

conexion.connect();
module.exports = conexion;