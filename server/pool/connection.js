const mysql2 = require("mysql2")

const { USER, DB_PORT, PASSWORD, HOST, DATABASE  } = process.env

const pool = mysql2.createPool(
    {
        host:HOST,
        port:DB_PORT,
        user:USER,
        password:PASSWORD,
        database:DATABASE,
        connectionLimit:10,
        waitForConnections: true,
        queueLimit: 0
    }
)

module.exports = pool.promise()