var connection = require('../connection')

var obj = new Array()
obj = ["a","b"]

var beacon = {
    getAllDataSet:function(callback){
        return connection.query("SELECT * FROM test", callback)
    },

    getBeaconsByDateTime(startDate, endDate, startTime, endTime){
        return connection.query("SELECT beacon FROM test WHERE Date BETWEEN ? AND ?  AND Time BETWEEN ? AND ?",
         [startDate, endDate, startTime, endTime], (error, rows) => {

          if (!error){
              obj = JSON.stringify(rows)
              console.log(obj)
            }
            else
              console.log("error")
        })
    },

    getBeaconsById(ID){
        return connection.query("SELECT beacon FROM test WHERE ID=?", [ID], (error, rows) => {
            if (!error)
              console.log(rows)
            else
              console.log("error")
        })
    }
}

//console.log(obj)
module.exports = beacon
