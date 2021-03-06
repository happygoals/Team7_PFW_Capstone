//file that has the functions for the navigation table that has the query to the mysql db - imports the connection from backend/connection

var connection = require('../connection')

let obj = new Array()
obj = ["a","b"]
var objparse = []

var text, posf, posb, output
var beaconList = []
var listItem = [[],[]]
var sqlBeacon = "SELECT beacon FROM test.test WHERE Date BETWEEN ? AND ?  AND Time BETWEEN ? AND ?"

var beacon = {
    //this function calls for a query of all the data from our db for the navigations table
    getAllDataSet:function(callback){
        return connection.query("SELECT beacon FROM test.test", callback)
    },
    getBeaconsByDateTimeForRouting:function(array, callback){
      return connection.query(sqlBeacon, [array[0], array[1], array[2], array[3]], callback)},

    getBeaconsByDateTimeForHeatmap(startDate, endDate, startTime, endTime){
      return connection.query("SELECT beacon FROM test.test WHERE Date BETWEEN ? AND ?  AND Time BETWEEN ? AND ?",
       [startDate, endDate, startTime, endTime], (error, rows) => {

        if (!error){
            obj = JSON.stringify(rows)
            objparse = JSON.parse(obj) //obj listOfElems parsing

            for(var i = 0; i < objparse.length; i++){

              text = JSON.stringify(objparse[i])
              //set the location to cut the text
              posf = text.indexOf(":") + 2
              posb = text.lastIndexOf("}") - 1
              output = text.slice(posf,posb) //cut it

              beaconList.push(output)        //store(push) cutted text (string) to list
              listItem[i] = beaconList[i].split("-")
            }
            //testing
            console.log(beaconList)
            console.log(listItem[3][3])
          }
          else
            console.log("error")
      })
  },

    getBeaconsById(ID){
        return connection.query("SELECT beacon FROM test.test WHERE ID=?", [ID], (error, rows) => {
            if (!error)
              console.log(rows)
            else
              console.log("error")
        })
    },

    // function getBeaconsByDateTime has to run first
    getList(){
      return listItem
    },

    parseData(array){
      obj = JSON.stringify(array)
      objparse = JSON.parse(obj) //obj array parsing

      for(var i = 0; i < objparse.length; i++){

        text = JSON.stringify(objparse[i])
        //set the location to cut the text
        posf = text.indexOf(":") + 2
        posb = text.lastIndexOf("}") - 1
        output = text.slice(posf,posb) //cut it

        beaconList.push(output)
              //store(push) cutted text (string) to list
      //  listItem[i] = beaconList[i].split("-")
      }
      console.log(beaconList)
    //  console.log(listItem[3][3])
    }
  }

module.exports = beacon
