//back end - express should connect to the database or server here.
const express = require('express')
const app = express()
var connection = require('./connection')
var query = require('./query')

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

app.use((req, res) => {
  connection.query('SELECT beacon FROM test where Id=2', (error, rows) => {
      if (!error)
        console.log(rows)
      else
        setValue(rows)
  })
})

function setValue(value){
  someVar =value
  console.log(someVar)
}

module.exports = app
