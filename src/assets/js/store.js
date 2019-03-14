let obj = new Array()
obj = ["a", "b"]
var objparse = []

var text, posf, posb, output
var beaconList = []
var routeBeacons =[]
var routeList = []
var listItem = [[], []]
var listItemD = []
var heatList
  = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0]


//pointer
var x = { Value: 0 };

//parsing function
function par(beacons) {
  obj = JSON.stringify(beacons)
  objparse = JSON.parse(obj) //obj array parsing

  for (var i = 0; i < objparse.length; i++) {

    text = JSON.stringify(objparse[i])
    //set the location to cut the text
    posf = text.indexOf(":") + 2
    posb = text.lastIndexOf("}") - 1
    output = text.slice(posf, posb) //cut it
    beaconList.push(output)
    //1-D array

    beacons.Value++ // pointer move

    //store(push) cutted text (string) to list to 2-D
    listItem[i] = beaconList[i].split("-")
  }
}

function parseRouting(beacons) {
  obj = JSON.stringify(beacons)
  objparse = JSON.parse(obj) //obj array parsing

  for (var i = 0; i < objparse.length; i++) {

    text = JSON.stringify(objparse[i])
    //set the location to cut the text
    posf = text.indexOf(":") + 2
    posb = text.lastIndexOf("}") - 1
    output = text.slice(posf, posb) //cut it

    routeBeacons.push(output)
    //store(push) cutted text (string) to list

  }
}

function returnValueForHeatMap() {
  return heatList
}

function StoreValueForRouting(routeBeacons){
  routeList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0]
  for(var i =0; i < routeBeacons.length; i++){
    routeList[i] = 0;
  }
  for(var i =0; i < routeBeacons.length; i++){
    switch(routeBeacons[i]){
      case "0-58-60-10":
        routeList[0]++
        break;
      case "0-20-30-27-35-5":
        routeList[1]++
        break;
      case "0-20-30-27-35-21-4":
        routeList[2]++
        break;
      case "0-20-30-27-35-21-23-36-29-37-51-9":
        routeList[3]++
        break;
      case "0-20-30-27-35-21-23-36-29-37-51-72-75-33-40-46-39-7":
        routeList[4]++
        break;
      case "0-20-30-27-35-21-23-36-29-55-49-53-44-50-42-48-38-43-7":
        routeList[5]++
        break;
      case "0-20-30-27-35-21-23-36-29-55-49-53-44-50-42-47-34-41-24-6":
        routeList[6]++
        break;
      case "0-20-30-27-31-22-28-32-8":
        routeList[7]++
        break;
      case "0-20-30-27-35-21-23-36-29-37-51-70-68-64-59-65-62-69-63-11":
        routeList[8]++
        break;
      case "1-24-6":
        routeList[9]++
        break;
      case "1-24-41-34-47-42-48-38-43-7":
        routeList[10]++
        break;
      case "1-24-41-34-47-42-50-44-53-49-56-45-51-9":
        routeList[11]++
        break;
      case "1-24-41-34-47-42-50-44-53-49-55-29-36-23-21-4":
        routeList[12]++
        break;
      case "1-24-41-34-47-42-50-44-53-49-55-29-36-23-21-35-5":
        routeList[13]++
        break;
      case "1-24-41-34-47-42-50-44-53-49-55-29-36-23-21-35-27-30-20-58-60-10":
        routeList[14]++
        break;
      case "1-24-41-34-47-42-50-44-53-49-55-29-37-51-70-66-71-67-8":
        routeList[15]++
        break;
      case "1-24-41-34-47-42-50-44-53-49-55-29-37-51-70-68-64-59-65-62-69-63-11":
        routeList[16]++
        break;
      case "2-25-59-65-62-69-63-11":
        routeList[17]++
        break;
      case "2-25-33-40-46-39-7":
        routeList[18]++
        break;
      case "2-25-33-40-46-39-43-38-48-42-47-38-41-24-6":
        routeList[19]++
        break;
      case "2-25-75-72-51-9":
        routeList[20]++
        break;
      case "2-25-75-72-51-70-66-71-67-8":
        routeList[21]++
        break;
      case "2-25-64-68-70-66-71-67-8":
        routeList[22]++
        break;
      case "2-25-75-72-51-37-29-36-23-21-4":
        routeList[23]++
        break;
      case "2-25-75-72-51-37-29-36-23-21-35-5":
        routeList[24]++
        break;
      case "2-25-75-72-51-37-29-36-23-21-35-27-30-20-58-60-10":
        routeList[25]++
        break;
    }
  }
  console.log(routeList)
}
function StoreValueForHeatmap(listItem) {
  heatList
    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0]
  for (var j = 0; j < listItem.length; j++) {
    for (var k = 0; k < listItem.length; k++) {
      switch (listItem[j][k]) {
        case "0":
          heatList[0]++
          break;
        case "1":
          heatList[1]++
          break;
        case "2":
          heatList[2]++
          break;
        case "3":
          heatList[3]++
          break;
        case "4":
          heatList[4]++
          break;
        case "5":
          heatList[5]++
          break;
        case "6":
          heatList[6]++
          break;
        case "7":
          heatList[7]++
          break;
        case "8":
          heatList[8]++
          break;
        case "9":
          heatList[9]++
          break;
        case "10":
          heatList[10]++
          break;
        case "11":
          heatList[11]++
          break;
        case "12":
          heatList[12]++
          break;
        case "13":
          heatList[13]++
          break;
        case "14":
          heatList[14]++
          break;
        case "15":
          heatList[15]++
          break;
        case "16":
          heatList[16]++
          break;
        case "17":
          heatList[17]++
          break;
        case "18":
          heatList[18]++
          break;
        case "19":
          heatList[19]++
          break;
        case "20":
          heatList[20]++
          break;
        case "21":
          heatList[21]++
          break;
        case "22":
          heatList[22]++
          break;
        case "23":
          heatList[23]++
          break;
        case "24":
          heatList[24]++
          break;
        case "25":
          heatList[25]++
          break;
        case "26":
          heatList[26]++
          break;
        case "27":
          heatList[27]++
          break;
        case "28":
          heatList[28]++
          break;
        case "29":
          heatList[29]++
          break;
        case "30":
          heatList[30]++
          break;
        case "31":
          heatList[31]++
          break;
        case "32":
          heatList[32]++
          break;
        case "33":
          heatList[33]++
          break;
        case "34":
          heatList[34]++
          break;
        case "35":
          heatList[35]++
          break;
        case "36":
          heatList[36]++
          break;
        case "37":
          heatList[37]++
          break;
        case "38":
          heatList[38]++
          break;
        case "39":
          heatList[39]++
          break;
        case "40":
          heatList[40]++
          break;
        case "41":
          heatList[41]++
          break;
        case "42":
          heatList[42]++
          break;
        case "43":
          heatList[43]++
          break;
        case "44":
          heatList[44]++
          break;
        case "45":
          heatList[45]++
          break;
        case "46":
          heatList[46]++
          break;
        case "47":
          heatList[47]++
          break;
        case "48":
          heatList[48]++
          break;
        case "49":
          heatList[49]++
          break;
        case "50":
          heatList[50]++
          break;
        case "51":
          heatList[51]++
          break;
        case "52":
          heatList[52]++
          break;
        case "53":
          heatList[53]++
          break;
        case "54":
          heatList[54]++
          break;
        case "55":
          heatList[55]++
          break;
        case "56":
          heatList[56]++
          break;
        case "57":
          heatList[57]++
          break;
        case "58":
          heatList[58]++
          break;
        case "59":
          heatList[59]++
          break;
        case "60":
          heatList[60]++
          break;
        case "61":
          heatList[61]++
          break;
        case "62":
          heatList[62]++
          break;
        case "63":
          heatList[63]++
          break;
        case "64":
          heatList[64]++
          break;
        case "65":
          heatList[65]++
          break;
        case "66":
          heatList[66]++
          break;
        case "67":
          heatList[67]++
          break;
        case "68":
          heatList[68]++
          break;
        case "69":
          heatList[69]++
          break;
        case "70":
          heatList[70]++
          break;
        case "71":
          heatList[71]++
          break;
        case "72":
          heatList[72]++
          break;
        case "73":
          heatList[73]++
          break;
        case "74":
          heatList[74]++
          break;
        case "75":
          heatList[75]++
          break;
      }

    }




  }

}



//module.exports = store

