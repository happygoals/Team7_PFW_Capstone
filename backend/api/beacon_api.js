var express = require('express')
var app = express()

// Import User Module Containing Functions Related To User Data
var beacon = require('../models/beacon')

app.get('/beaconById', function(req, res) {

	beacon.getBeaconsById(function(err, rows, fields) {
		if(err) throw err
        res.json(rows)
        console.log(rows)
	})
})

module.exports = app