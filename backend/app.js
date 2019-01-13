//back end - express should connect to the database or server here.
const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const mysql = require('mysql')

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '123456789',
  port : 3306, //port mysql
  database:'sampledata'
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/images", express.static(path.join('backend/images')))

db.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})
global.db = db;


app.use((req, res) => {
  connection.query('SELECT * FROM test', (error, rows) => {
      if (!error)
        console.log(rows)
      else
        console.log('ERROR')
  })
})


module.exports = app
