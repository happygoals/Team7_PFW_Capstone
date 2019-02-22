//var beacon = require('/Capstone/Team7_PFW_Capstone/backend/models/beacon')


var k = "please wfdsfgdgfgfgdfgdork...";
//connection testing with Angular front end w/ ts!
function help(k) {
  alert(k)
}


let obj = new Array()
obj = ["a","b"]
var objparse = []

var text, posf, posb, output
var beaconList = []
var listItem = [[],[]]
var listItemD = []

//pointer 
var x = {Value: 0};

//parsing function
function par(beacons) {

    obj = JSON.stringify(beacons)
    objparse = JSON.parse(obj) //obj array parsing

    for(var i = 0; i < objparse.length; i++){

      text = JSON.stringify(objparse[i])
      //set the location to cut the text
      posf = text.indexOf(":") + 2
      posb = text.lastIndexOf("}") - 1
      output = text.slice(posf,posb) //cut it

      beaconList.push(output)

      //1-D array
      //listItemD[i] = beaconList[i].split("-")
      beacons.Value++ // pointer move 
      
    //store(push) cutted text (string) to list to 2-D
    listItem[i] = beaconList[i].split("-")
    }
    
    console.log(listItemD)
    console.log(beaconList)
    console.log(listItem.length)
    console.log(listItem)
    // for(var v = 0; v < listItem[v].length; v++) {
    //   for(var z = 0; z < listItem.length; z++) {
    //    console.log(listItem[z][v]);
    //   }
    //  }
    //console.log(listItem[3][3])

}

//module.exports = store

