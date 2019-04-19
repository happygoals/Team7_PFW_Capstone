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
    getExport(startDate, endDate, startTime, endTime){
      return connection.query("SELECT beacon FROM test.test WHERE Date BETWEEN ? AND ?  AND Time BETWEEN ? AND ?",
       [startDate, endDate, startTime, endTime], (error, rows) => {

        if (!error){
            obj = JSON.stringify(rows)
            console.log("print")
             objparse = JSON.parse(obj)
        }})},
  login:function(Email, Password){

  let checkingquery = "SELECT * FROM test.login WHERE Email= '" + Email + "' and Password = '"+ Password +"' "

	if (Email && Password) {
		connection.query(checkingquery,(error, results) => {
			if (results.length > 0) {
				console.log('llogged in ')
			} else {
				console.log("bad pass")
			}
		});
	} else {
		console.log("empty")
	}
    },
    update:function(Firstname, Lastname, Email, Password){

      let checkingquery = "SELECT * FROM test.login WHERE Email= '" + Email + "'"

      connection.query(checkingquery, (err, result) => {
        if (err) {
          //return res.status(500).send(err)
          console.log("first error")
        }
        if (result.length > 0) {
          console.log("got to length")
          //let addquery ="INSERT INTO `test.login` (Firstname, Lastname, Email, Password) VALUES ('" +
         // Firstname + "', '" + Lastname + "', '" + Email + "', '" + Password+ "')";
         //UPDATE `test`.`login` SET `Firstname` = 'Robert', `Lastname` = 'Hall', `Email` = 'RobertHall@parkview.com', `Password` = 'c123456789' WHERE (`EmployeeID` = '555789203');
         let stmt ="UPDATE test.login set Firstname ='"+Firstname+"', Lastname ='"+Lastname+"', Password = '"+Password+"' WHERE (Email = '" + Email + "')"
         let todo = ["Insert", false]
         connection.query(stmt,todo, (err,results,fields) => {
           if(err) {
             return console.error(err.message)
           }
           console.log("new update")
           console.log ('todo id:' + results.insertid)
         })

         /*
         connection.query(addquery, (err, result) => {
          if (err) {
            console.log("bad")
          }
          //res.redirect('/');
          else{console.log("created")}

        })*/
      }})
    },
    register:function(Firstname, Lastname, Email, Password, EmployeeID){

      let checkingquery = "SELECT * FROM test.login WHERE EmployeeID= '" + EmployeeID + "'"

      connection.query(checkingquery, (err, result) => {
        if (err) {
          //return res.status(500).send(err)
          console.log("first error")
        }
        if (result.length > 0) {
          console.log("got to length")
          //let addquery ="INSERT INTO `test.login` (Firstname, Lastname, Email, Password) VALUES ('" +
         // Firstname + "', '" + Lastname + "', '" + Email + "', '" + Password+ "')";
         //UPDATE `test`.`login` SET `Firstname` = 'Robert', `Lastname` = 'Hall', `Email` = 'RobertHall@parkview.com', `Password` = 'c123456789' WHERE (`EmployeeID` = '555789203');
         let stmt ="UPDATE test.login set Firstname ='"+Firstname+"', Lastname ='"+Lastname+"', Email = '"+Email+"', Password = '"+Password+"' WHERE (EmployeeID = '" + EmployeeID + "')"
         let todo = ["Insert", false]
         connection.query(stmt,todo, (err,results,fields) => {
           if(err) {
             return console.error(err.message)
           }
           console.log ('todo id:' + results.insertid)
         })

         /*
         connection.query(addquery, (err, result) => {
          if (err) {
            console.log("bad")
          }
          //res.redirect('/');
          else{console.log("created")}

        })*/
      }})
    },
    // login:function(Email, Password){
    //   if (Email && Password) {
    //     connection.query('SELECT * FROM test.login WHERE Email = ? AND Password = ?', [Email, Password], function(error, results, fields) {
    //       if (results.length > 0) {
    //         //request.session.loggedin = true;
    //         //request.session.Email = Email;
    //         //response.redirect('/population');
    //         console.log("connected")
    //         return true;
    //       } else {
    //         //response.send('Incorrect Email and/or Password!');
    //         console.log("false")
    //         return false;
    //       }
    //       //response.end();
    //     })
    //   } else {
    //     console.log("fail")
    //     //response.send('Please enter Email and Password!');
    //     //response.end();
    //   }
    // },
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
    },


     createExcel() {
      var Excel = require('exceljs')

      var workbook = new Excel.Workbook();

      workbook.creator = 'Capstone Team 7'
      workbook.lastModifiedBy = ''
      workbook.created = new Date(2019, 4, 14)
      workbook.modified = new Date()
      workbook.lastPrinted = new Date(2019, 4, 14)

      var sheet = workbook.addWorksheet('Sheet1')

      sheet.columns = [
        {
          header: 'beacon', key: 'beacon'
        }
      ]

      for(let i =0; i< beacon.length; i++){
        sheet.addRow({beacon: beacon[i]});
      }

      workbook.xlsx.writeFile("The First Excel3.xlsx").then(function() {
        console.log("worked")
        //alert("File created!")
      })
    }
  }

module.exports = beacon
