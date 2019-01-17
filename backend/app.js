//back end - express should connect to the database or server here.
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var connection = require('express-myconnection')
const mysql = require('mysql')

//local DB info - different per person
connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '123456789',
  port : 3306, //port mysql
  database:'test'
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})

app.use((req, res) => {
  connection.query('SELECT * FROM test', (error, rows) => {
      if (!error)
        console.log(rows)
      else
        console.log('ERROR')
  })
})

app.use((req, res, next) => {
  console.log("first 1")
  console.log(req.method)
  console.log(req.url)
  next()
})

module.exports = app
