var mysql = require ('mysql')
var connection = require('express-myconnection')
var conn = require('./connection')

var k =
conn.query('SELECT * from test.test', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
});


module.exports = conn.query

