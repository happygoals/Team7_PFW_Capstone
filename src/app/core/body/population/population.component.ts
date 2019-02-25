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
  StoreValueForHeatmap: Function
}

declare function help(string): any
declare function par(list):any
declare var k: any
declare var listItem: any
declare function StoreValueForHeatmap(Array): any


@Component({
  selector: "app-core-body-population",
  templateUrl: "./population.component.html",
  styleUrls: ["./population.component.css"]
})

export class PopulationComponent implements OnInit {
  public beacons: Beacon[];
  public beacon: Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public beaconSet : any[];

  ary: any = ["2018-01-19", "2018-01-20", "07:30:00", "08:01:32"];
  startDate: string = "2018-01-19";
  endDate: string = "2018-01-29";
  startTime: string = "07:30:00";
  endTime: string = "07:50:00";

  constructor(
    private beaconService: BeaconService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    //help(this.endTime)
    this.getBeaconSets(this.startDate, this.endDate, this.startTime, this.endTime);
  }

  callParse() {
    console.log("prased");
    par(this.beacons);
  }
  getAll() {
    this.beaconService.getAllBeacons().subscribe((data: Beacon[]) => {
      this.beacons = data;
      console.log(this.beacons);
      console.log(this.beacons[1]);
    });
  }
  getBeaconSets(startDate, endDate, startTime, endTime) {
    this.beaconService
      .getBeaconSets(startDate, endDate, startTime, endTime)
      .subscribe((data: Beacon[]) => {
        this.beacons = data;
        console.log(this.beacons);
      });
  }
}
