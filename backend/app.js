//back end - express should connect to the database or server here.

const express = require('express')
const app = express()
var router = require('./controllers/auth')
var connection = require('./connection')
var beacon = require('./models/beacon')
var BeaconController = require('./controllers/beacons')
app.use('/beacons', BeaconController)

var i = 1

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})

//beacon.getBeaconsByDateTimeForHeatmap('2018-01-01', '2018-01-02', '07:30:00', '08:00:00');
//beacon.login('DarrellKeeling@parkview.com', 'a123456789')

//beacon.register('x', 'x','x@pfw.edu', 'xx','456')
beacon.update('23423423', 'ppppp','x@pfw.edu', 'xxo999')
//beacon.login('x@pfw.edu', 'xx33232')

module.exports = app
