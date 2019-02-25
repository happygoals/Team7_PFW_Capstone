//back end - express should connect to the database or server here.

const express = require('express')
const app = express()
var connection = require('./connection')
var beacon = require('./models/beacon')
var BeaconController = require('./controllers/beacons')
app.use('/beacons', BeaconController)
//var store = require('../../Team7_PFW_Capstone/src/assets/js/store')



var i = 1

// //local DB info - different per person
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack)
//     return
//   }
//   console.log('connected as id ' + connection.threadId)
// })

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})

app.get('/hi/:start/:end',(req, res, next) => {
  var start = req.params.start;
  var end = req.params.end;
  connection.query("SELECT beacon FROM test WHERE Date BETWEEN ? AND ?",[start, end], (error, rows) => {
    console.log(rows)
  }
  )
})

// app.use((req, res, next) => {
//   if(i == 2){
//     console.log("Function for Heat Map")
//     beacon.getBeaconsByDateTimeForHeatmap('2018-01-01', '2018-01-02', '07:30:00', '8:01:32')
//     next()
//   }
//   i++
//   //console.log(obj)
// })
// var arr = ["2018-01-19", "2018-01-20", "07:30:00", "08:01:32"]
// app.use((req, res, next) => {
//   if(i == 2){
//     console.log("Function for Routing")
//     beacon.getBeaconsByDateTimeForRouting(arr)
//   }
//   i++

//   next()
// })

module.exports = app
