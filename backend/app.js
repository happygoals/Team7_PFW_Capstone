//back end - express should connect to the database or server here.

const express = require('express')
const app = express()
var connection = require('./connection')
var beacon = require('./models/beacon')
var BeaconController = require('./controllers/beacons')
app.use('/beacons', BeaconController)

var i = 1

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})

module.exports = app
