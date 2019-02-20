//connection to the mysql db - it is called into other files that utilize a connection.

var mysql = require ('mysql')
var connection = require('express-myconnection')

connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '123456789',
  port : 3306, //port mysql
  database:'test'
})

module.exports = connection
