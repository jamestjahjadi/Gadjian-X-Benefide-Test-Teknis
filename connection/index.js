const mysql = require('mysql')

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tribal12",
    database: "gadjian_backend",
    port: "3306"
});