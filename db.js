var mysql = require('mysql2')
// var db = '127.0.0.1'
const dotenv = require('dotenv')
dotenv.config();

var connection = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
})

connection.connect()
module.exports = connection
