import {HeatmapComponent } from '/Capstone/Team7_PFW_Capstone/src/app/core/body/population/heatmap/heatmap.component';

const express = require('express')
var mysql = require('mysql')
const app = express()

var conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password : '123456789',
  port : 3306, //port mysql
  database:'test'
})

conn.connect(function(err){
  if(err){
    console.log(err)
  }
  else{
    console.log('connect!')
  }
})

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT count(beacon) FROM test WHERE Department = 'ATC'", function (err, result) {
    if (err) throw err;
    console.log(result);
  })
});

module.exports = heatDB
