
//var beacon = require('/Capstone/Team7_PFW_Capstone/backend/models/beacon')


var k = "Hello testing!";
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
var heatList 
         = [0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0]


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

      //listItemD = beaconList.split("-")
      //beacons.Value++ // pointer move

      //store(push) cutted text (string) to list to 2-D
      listItem[i] = beaconList[i].split("-")
    }

    //console.log(listItemD)
    //console.log(beaconList)
    console.log(listItem.length)
    console.log(listItem)

}

function StoreValueForHeatmap(listItem)
{
  console.log(listItem[5][6])
  console.log(listItem[5])

  for(var j = 0; j < listItem.length; j++)
  {
    console.log(listItem[j])
    for(var k = 0; k< listItem.length; k++) {
      console.log(listItem[j][k])
      switch (listItem[j][k]){
        case "0":
          heatList[0]++
          console.log("testing heat list:" + heatList[0])
          break;
        case "1":
          heatList[1]++
          console.log("testing heat list:" + heatList[1])
          break;  
        case "2":
          heatList[2]++
          console.log("testing heat list:" + heatList[2])
          break;
        case "3":
          heatList[3]++
          console.log("testing heat list:" + heatList[3])
          break;
        case "4":
          heatList[4]++
          console.log("testing heat list:" + heatList[4])
          break;  
        case "5":
          heatList[5]++
          console.log("testing heat list:" + heatList[5])
          break; 
        case "6":
          heatList[6]++
          console.log("testing heat list:" + heatList[6])
          break;
        case "7":
          heatList[7]++
          console.log("testing heat list:" + heatList[7])
          break;  
        case "8":
          heatList[8]++
          console.log("testing heat list:" + heatList[8])
          break; 
        case "9":
          heatList[9]++
          console.log("testing heat list:" + heatList[9])
          break;
        case "10":
          heatList[10]++
          console.log("testing heat list:" + heatList[10])
          break;
        case "11":
          heatList[11]++
          console.log("testing heat list:" + heatList[11])
          break;
        case "12":
          heatList[12]++
          console.log("testing heat list:" + heatList[12])
          break;  
        case "13":
          heatList[13]++
          console.log("testing heat list:" + heatList[13])
          break;
        case "14":
          heatList[14]++
          console.log("testing heat list:" + heatList[14])
          break;
        case "15":
          heatList[15]++
          console.log("testing heat list:" + heatList[15])
          break;  
        case "16":
          heatList[16]++
          console.log("testing heat list:" + heatList[16])
          break; 
        case "17":
          heatList[17]++
          console.log("testing heat list:" + heatList[17])
          break;
        case "18":
          heatList[18]++
          console.log("testing heat list:" + heatList[18])
          break;  
        case "19":
          heatList[19]++
          console.log("testing heat list:" + heatList[19])
          break; 
        case "20":
          heatList[20]++
          console.log("testing heat list:" + heatList[20])
          break;
        case "21":
          heatList[21]++
          console.log("testing heat list:" + heatList[21])
          break;
        case "22":
          heatList[22]++
          console.log("testing heat list:" + heatList[22])
          break;
        case "23":
          heatList[23]++
          console.log("testing heat list:" + heatList[23])
          break;  
        case "24":
          heatList[24]++
          console.log("testing heat list:" + heatList[24])
          break;
        case "25":
          heatList[25]++
          console.log("testing heat list:" + heatList[25])
          break;
        case "26":
          heatList[26]++
          console.log("testing heat list:" + heatList[26])
          break;  
        case "27":
          heatList[27]++
          console.log("testing heat list:" + heatList[27])
          break; 
        case "28":
          heatList[28]++
          console.log("testing heat list:" + heatList[28])
          break;
        case "29":
          heatList[29]++
          console.log("testing heat list:" + heatList[29])
          break;  
        case "30":
          heatList[30]++
          console.log("testing heat list:" + heatList[30])
          break; 
        case "31":
          heatList[31]++
          console.log("testing heat list:" + heatList[31])
          break;
        case "32":
          heatList[32]++
          console.log("testing heat list:" + heatList[32])
          break;
        case "33":
          heatList[33]++
          console.log("testing heat list:" + heatList[33])
          break;
        case "34":
          heatList[34]++
          console.log("testing heat list:" + heatList[34])
          break;  
        case "35":
          heatList[35]++
          console.log("testing heat list:" + heatList[35])
          break;
        case "36":
          heatList[36]++
          console.log("testing heat list:" + heatList[36])
          break;
        case "37":
          heatList[37]++
          console.log("testing heat list:" + heatList[37])
          break;  
        case "38":
          heatList[38]++
          console.log("testing heat list:" + heatList[38])
          break; 
        case "39":
          heatList[39]++
          console.log("testing heat list:" + heatList[39])
          break;
        case "40":
          heatList[40]++
          console.log("testing heat list:" + heatList[40])
          break;  
        case "41":
          heatList[41]++
          console.log("testing heat list:" + heatList[41])
          break; 
        case "42":
          heatList[42]++
          console.log("testing heat list:" + heatList[42])
          break;
        case "43":
          heatList[43]++
          console.log("testing heat list:" + heatList[43])
          break;
        case "44":
          heatList[44]++
          console.log("testing heat list:" + heatList[44])
          break; 
        case "45":
          heatList[45]++
          console.log("testing heat list:" + heatList[45])
          break;
        case "46":
          heatList[46]++
          console.log("testing heat list:" + heatList[46])
          break;
        case "47":
          heatList[47]++
          console.log("testing heat list:" + heatList[47])
          break; 
        case "48":
          heatList[48]++
          console.log("testing heat list:" + heatList[48])
          break;
        case "49":
          heatList[49]++
          console.log("testing heat list:" + heatList[49])
          break;
        case "50":
          heatList[50]++
          console.log("testing heat list:" + heatList[50])
          break;
        case "51":
          heatList[51]++
          console.log("testing heat list:" + heatList[51])
          break;
        case "52":
          heatList[52]++
          console.log("testing heat list:" + heatList[52])
          break;
        case "53":
          heatList[53]++
          console.log("testing heat list:" + heatList[53])
          break;
        case "54":
          heatList[54]++
          console.log("testing heat list:" + heatList[54])
          break;
        case "55":
          heatList[55]++
          console.log("testing heat list:" + heatList[55])
          break;
        case "56":
          heatList[56]++
          console.log("testing heat list:" + heatList[56])
          break;
        case "57":
          heatList[57]++
          console.log("testing heat list:" + heatList[57])
          break;
        case "58":
          heatList[58]++
          console.log("testing heat list:" + heatList[58])
          break;
        case "59":
          heatList[59]++
          console.log("testing heat list:" + heatList[59])
          break;
        case "60":
          heatList[60]++
          console.log("testing heat list:" + heatList[60])
          break;
        case "61":
          heatList[61]++
          console.log("testing heat list:" + heatList[61])
          break;
        case "62":
          heatList[62]++
          console.log("testing heat list:" + heatList[62])
          break;
        case "63":
          heatList[63]++
          console.log("testing heat list:" + heatList[63])
          break;
        case "64":
          heatList[64]++
          console.log("testing heat list:" + heatList[64])
          break;
        case "65":
          heatList[65]++
          console.log("testing heat list:" + heatList[65])
          break;
        case "66":
          heatList[66]++
          console.log("testing heat list:" + heatList[66])
          break;
        case "67":
          heatList[67]++
          console.log("testing heat list:" + heatList[67])
          break;
        case "68":
          heatList[68]++
          console.log("testing heat list:" + heatList[68])
          break;
        case "69":
          heatList[69]++
          console.log("testing heat list:" + heatList[69])
          break;
        case "70":
          heatList[70]++
          console.log("testing heat list:" + heatList[70])
          break;
        case "71":
          heatList[71]++
          console.log("testing heat list:" + heatList[71])
          break;
        case "72":
          heatList[72]++
          console.log("testing heat list:" + heatList[72])
          break;
        case "73":
          heatList[73]++
          console.log("testing heat list:" + heatList[73])
          break;
        case "74":
          heatList[74]++
          console.log("testing heat list:" + heatList[74])
          break;
        case "75":
          heatList[75]++
          console.log("testing heat list:" + heatList[75])
          break;
      }
        
    }


    
    
  }

}



//module.exports = store

