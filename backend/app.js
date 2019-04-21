//back end - express should connect to the database or server here.

const express = require('express')
const app = express()
var router = require('./controllers/auth')
var connection = require('./connection')
var beacon = require('./models/beacon')
var BeaconController = require('./controllers/beacons')

var cors = require('cors')
 
app.use(cors())
//const excel = require('node-excel-export')



var AuthController = require('./controllers/auth')
app.use('/beacons', BeaconController)
app.use('/auth', AuthController)

var i = 1

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})
var ebeacons = []

module.exports = app
