import { Component, ViewChild, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { BeaconService } from "../../../services/beacon.service";
import { Beacon } from "../../../interfaces/beacon.interface";
import { Router, UrlSegment } from "@angular/router";
import { Variable } from "@angular/compiler/src/render3/r3_ast";

interface External {
  par: Function
  listItem: Variable
  heatList: Variable
  StoreValueForHeatmap: Function
}

declare function par(list):any
declare var heatList: any
declare var listItem: any
declare function StoreValueForHeatmap(Array): any
declare var departmentList: any

@Component({
  selector: "app-core-body-population",
  templateUrl: "./population.component.html",
  styleUrls: ["./population.component.css"]
})

export class PopulationComponent {

  public beacons: Beacon[];
  public beacon: Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public beaconSet : any[];
  heats: any = 0;
  ChildVal : any;
  tempBeacon: any[];
  temp: any;
  numMax: number;
  numMin: number;
  Department: any;
  setVal: number = 0;
  tempDept: any;

  GetOutput(selected: any) {
    if(selected)
    {
      this.beacons = selected;
      this.callParse()
    }
  }

  callParse() {
    par(this.beacons);
    for(var v =0; v <heatList.length; v++){
      heatList[v] = 0;
    }
    StoreValueForHeatmap(listItem)
    this.setVal++
    this.MaxBeaconNum()
    this.MinBeaconNum()
    this.BusyDept()
    this.heats = heatList
  }

  MaxBeaconNum() {
    if(this.setVal > 6){
    this.tempBeacon = heatList;
    this.temp = this.tempBeacon[0];
    var num: number = 1;
    var k: number;

    for(k = num; k < this.tempBeacon.length; k++)
    {
      if(this.tempBeacon[k] >= this.temp) {
        this.temp = this.tempBeacon[k];
        this.numMax = k;
      }
    }
  }
  }

  MinBeaconNum() {
    this.tempBeacon = heatList;
    this.temp = this.tempBeacon[0];
    var num: number = 1;
    var j: number;

    for(j = num; j < this.tempBeacon.length; j++)
    {
      if(this.tempBeacon[j] <= this.temp) {
        if(this.tempBeacon[j] != 0) {
        this.temp = this.tempBeacon[j];
        this.numMin = j;

        }
      }
    }
  }


  BusyDept() {
    this.Department = "";
    if(this.setVal > 6){
    this.tempBeacon = departmentList;
    this.temp = this.tempBeacon[0];
    var num: number = 1;
    var j: number;

    for(j = num; j < departmentList.length; j++)
    {
      if(this.tempBeacon[j] <= this.temp) {
        this.temp = this.tempBeacon[j];
        this.tempDept = j
      }
    }


    if(this.tempDept===0)
    {
      this.Department = "Parkview physicians group cardiology"
    }
    else if(this.tempDept===1)
    {
      this.Department = "ATC"
    }
    else if(this.tempDept===2)
    {
      this.Department = "Imaging"
    }
    else if(this.tempDept===3)
    {
      this.Department = "Gift shop"
    }
    else if(this.tempDept===4)
    {
      this.Department = "Dining area"
    }
    else if(this.tempDept===5)
    {
      this.Department = "Children’s speciality clinic"
    }
    else if(this.tempDept===6)
    {
      this.Department = "Emergency"
    }

  }
}

}
