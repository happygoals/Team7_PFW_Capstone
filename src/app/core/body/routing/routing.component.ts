import { Component, OnInit, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { BeaconService } from '../../../services/beacon.service';
import { Beacon } from '../../../interfaces/beacon.interface';
import { Router, UrlSegment } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import *  as bg from '../../../../assets/images/x160.jpg';

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

export class RoutingComponent implements OnInit{

  @ViewChild('canvasEl') canvasEl: ElementRef;

  private context: CanvasRenderingContext2D;

  public beacons : Beacon[];
  public beacon : Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public routes : any = 0;
  public beaconSet : any[];

  routingBeacons : Beacon[];

  ngOnInit(){
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.context.drawImage(bg,0,0)
  }
  GetOutput(selected: any){
    if(selected)
    {
      this.beacons = selected;
      this.callParse()
      this.draw(3)
    }
  }

  callParse() {
    parseRouting(this.beacons);
    StoreValueForRouting(routeBeacons)
    this.routes = routeList
    this.draw(3)
    console.log(this.routes)
  }

  private draw(value) {
    console.log('drawing')
    if(value == 2){
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(54, 45, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.fillStyle="green";
    this.context.fill();
    this.context.beginPath();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.fillStyle="red";
    this.context.fill();
    }
        if(value == 3){
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(54, 45, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.arc(300, 10, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(10, 75, 5, 0, 2 * Math.PI);
    this.context.fillStyle="black";
    this.context.fill();
    this.context.stroke();
    this.context.arc(30, 10, 5, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.beginPath();
    this.context.arc(100, 75, 5, 0, 2 * Math.PI);
    this.context.fillStyle="green";
    this.context.fill();
    this.context.beginPath();
    this.context.arc(300, 100, 5, 0, 2 * Math.PI);
    this.context.fillStyle="red";
    this.context.fill();
    }
  }
}
