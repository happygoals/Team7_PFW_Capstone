import { Component, ViewChild, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { BeaconService } from "../../../services/beacon.service";
import { Beacon } from "../../../interfaces/beacon.interface";
import { Router, UrlSegment } from "@angular/router";
import { Variable } from "@angular/compiler/src/render3/r3_ast";

interface External {
  help: Function
  k: Variable
  par: Function
  beaconList: Variable
  listItemD: Variable
  listItem: Variable
  heatList: Variable
  parseRouting: Function
  returnValueForHeatMap: Function
  StoreValueForHeatmap: Function
  resetHeatList: Function
}

declare function help(string): any
declare function par(list):any
declare function parseRouting(list):any
declare function returnValueForHeatMap():any
declare var k: any
declare var heatList: any
declare var listItem: any
declare function resetHeatList(): any
declare function StoreValueForHeatmap(Array): any


@Component({
  selector: "app-core-body-population",
  templateUrl: "./population.component.html",
  styleUrls: ["./population.component.css"]
})

export class PopulationComponent{

  public beacons: Beacon[];
  public beacon: Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public beaconSet : any[];
  heats: any = 0;
  ChildVal : any;

  GetOutput(selected: any){
    if(selected)
    {
      this.beacons = selected;
      this.callParse()
    }
  }

  callParse() {
    par(this.beacons);
    StoreValueForHeatmap(listItem)
    this.heats = heatList
  }
}
