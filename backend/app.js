//back end - express should connect to the database or server here.
const express = require('express')
const app = express()
var connection = require('./connection')
//var heat = require('./heat')
//var query = require('./query')
var beacon = require('./models/beacon')

//local DB info - different per person
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('connected as id ' + connection.threadId)
})

app.use(require('./api/beacon_api'))

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})

app.use((req, res, next) => {
  beacon.getBeaconsById(667)
  console.log("function works")
  next()
})
app.use((req, res, next) => {
  console.log("start date time func")
  beacon.getBeaconsByDateTime('2018-01-01', '2018-01-02', '07:30:00', '07:50:00')
  console.log("function for date time works")
  next()

})


module.exports = app
