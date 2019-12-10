const mysql = require("mysql")

const pool = mysql.createPool({
    connectionLimit: 10,
    user: "newuser",
    password: "",
    host: "localhost",
    database: "sports"
})

module.exports = pool;