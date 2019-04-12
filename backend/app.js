//back end - express should connect to the database or server here.

const express = require('express')
const app = express()
var router = require('./controllers/auth')
var connection = require('./connection')
var beacon = require('./models/beacon')
var BeaconController = require('./controllers/beacons')
//const excel = require('node-excel-export')



app.use('/beacons', BeaconController)

var i = 1

app.use((req, res, next) => {
  res.send('Hello - !')
  next()
})
var ebeacons = []
//ebeacons = beacon.getAllDataSet()
//console.log(ebeacons[1])
//beacon.createExcel(ebeacons)
//beacon.createExcel()

//beacon.register('x', 'x','x@pfw.edu', 'xx','456')
//beacon.update('23423423', 'ppppp','x@pfw.edu', 'xxo999')
//beacon.login('x@pfw.edu', 'xx33232')



/*
//export style
const styles = {
  headerDark: {
    fill: {
      fgColor: {
        rgb: 'FF000000'
      }
    },
    font: {
      color: {
        rgb: 'FFFFFFFF'
      },
      sz: 14,
      bold: true,
      underline: true
    }
  },
  cellPink: {
    fill: {
      fgColor: {
        rgb: 'FFFFCCFF'
      }
    }
  },
  cellGreen: {
    fill: {
      fgColor: {
        rgb: 'FF00FF00'
      }
    }
  }
};

//Array of objects representing heading rows (very top)
const heading = [
  {value: 'Beacons', style: styles.headerDark}
];


const specification = {
  beacon: {
    displayName: 'beacon',
    headerStyle: styles.headerDark,
    cellStyle: function(value, row) {
      return (value ==1) ? 'Active' : 'Inactive'
    },
    width:'10'
  }
}

const dataset = [
  beacon.getBeaconsByDateTimeForHeatmap('2018-01-01', '2018-01-02', '07:30:00', '08:00:00')
]


//1-1 = A:1 cell name
const merges = [
  { start: { row: 1, column: 1 }, end: { row: 1, column: 10 } }
]

const report = excel.buildExport(
  [
    {
      name: 'Report', //sheet name
      heading: heading, //heading array
      merges: merges, //merge cell range
      specification: specification, //report specification
      data:dataset  //report data
    }
  ]
)

res.attachment('report.xlsx')
return res.send(report)
*/




module.exports = app
