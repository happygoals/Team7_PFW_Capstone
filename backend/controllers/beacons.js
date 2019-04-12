//this file utilizes express routing to set the connection pages for the functions stated in the backend/models/beacon file

var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())
var beacon = require('../models/beacon')
var connection = require('../connection')


//this router uses the function to get all the data from the navigation table from our db | link: http://localhost:3000/beacons
router.get('/', function(req, res){
    beacon.getAllDataSet(function(err, rows){
        if(err){
            res.status(400).json(err)
        }
        else{
      
            res.json(rows)
        }
    })
})

//this router uses the function to get the beacon data for specific time from the navigation table from our db | link: http://localhost:3000/beacons/beaconRouting
router.get('/beaconSets/:startDate/:endDate/:startTime/:endTime', function(req, res) {
    var startDate = req.params.startDate;
    var endDate = req.params.endDate;
    var startTime = req.params.startTime;
    var endTime = req.params.endTime;
    var sqlBeacon = "SELECT beacon FROM test.test WHERE Date BETWEEN ? AND ?  AND Time BETWEEN ? AND ?"

    return connection.query(sqlBeacon, [startDate, endDate, startTime, endTime], (err, rows)=>{
        if(err){
            res.status(400).json(err)
        }
        else{
            res.json(rows)
        }
    })
})

module.exports = router
