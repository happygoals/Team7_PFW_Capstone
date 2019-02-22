//var beacon = require('/Capstone/Team7_PFW_Capstone/backend/models/beacon')

//connection testing with Angular front end w/ ts!
function help() {
  alert("please work...")
}


let obj = new Array()
obj = ["a","b"]
var objparse = []

var text, posf, posb, output
var beaconList = []
var listItem = [[],[]]
var listItemD = []

//parsing function
function par(rows) {

    obj = JSON.stringify(rows)
    objparse = JSON.parse(obj) //obj array parsing

    for(var i = 0; i < objparse.length; i++){

      text = JSON.stringify(objparse[i])
      //set the location to cut the text
      posf = text.indexOf(":") + 2
      posb = text.lastIndexOf("}") - 1
      output = text.slice(posf,posb) //cut it

      beaconList.push(output)

      //1-D array
      //listItemD = beaconList.split("-")

    //store(push) cutted text (string) to list to 2-D
    //listItem[i] = beaconList[i].split("-")
    }
    console.log(beaconList)
  //  console.log(listItem[3][3])

}

//module.exports = store

