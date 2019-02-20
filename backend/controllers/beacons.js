//this file utilizes express routing to set the connection pages for the functions stated in the backend/models/beacon file

var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())
var beacon = require('../models/beacon')

//this router uses the function to get all the data from the navigation table from our db | link: http://localhost:3000/beacons
router.get('/', function(req, res){
    beacon.getAllDataSet(function(err, rows){
        if(err){
            res.status(400).json(err)
        }
        else{
            console.log(rows)
            res.json(rows)
        }
    })
})

//this router uses the function to get the beacon data for specific time from the navigation table from our db | link: http://localhost:3000/beacons/beaconRouting
router.get('/beaconsRouting', function(req, res){
    beacon.getBeaconsByDateTimeForRouting(req.body, function(err, count){
        if(err){
            res.status(400).json(err)
        }
        else{
            
            res.json(req.body)
        }
    })
})

module.exports = router