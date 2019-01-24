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
