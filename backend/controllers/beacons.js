var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
router.use(bodyParser.json())
var beacon = require('../models/beacon')

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