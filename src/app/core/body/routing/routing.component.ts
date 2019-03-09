import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { BeaconService } from '../../../services/beacon.service';
import { Beacon } from '../../../interfaces/beacon.interface';
import { Router, UrlSegment } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Variable } from '@angular/compiler/src/render3/r3_ast';



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
  StoreValueForRouting: Function
  routeList: Variable
  routeBeacons: Variable
}

declare function help(string): any
declare function par(list):any
declare function parseRouting(list):any
declare function returnValueForHeatMap():any
declare var k: any
declare var heatList: any
declare var routeBeacons: any
declare var listItem: any
declare var routeList:any
declare function resetHeatList(): any
declare function StoreValueForHeatmap(Array): any
declare function StoreValueForRouting(Array): any
@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent{

  public beacons : Beacon[];
  public beacon : Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public routes : any;
  public beaconSet : any[];

  routingBeacons : Beacon[];

  GetOutput(selected: any){
    if(selected)
    {
      this.beacons = selected;
      this.callParse()
    }
  }

  callParse() {
    parseRouting(this.beacons);
    StoreValueForRouting(routeBeacons)
    this.routes = routeList
    console.log(this.routes)
  }
}
