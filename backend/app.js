//back end - express should connect to the database or server here.
const express = require('express')
const app = express()
var connection = require('./connection')
//var heat = require('./heat')
//var query = require('./query')

//local DB info - different per person
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

var someVar = [];
function setValue(value){
  someVar = value
  console.log(someVar)
}

app.use((req, res) => {
  connection.query('SELECT beacon FROM test where Id=1000', (error, rows) => {
      if (!error)
        setValue(rows)
      else
        console.log("error")
  })
})
module.exports = app
