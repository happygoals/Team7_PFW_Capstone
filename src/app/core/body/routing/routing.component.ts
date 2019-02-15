import { Component, OnInit} from '@angular/core';
import { BeaconService } from '../../../services/beacon.service';
import { Beacon } from '../../../interfaces/beacon.interface';
import { Router } from '@angular/router';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css','./routing.component.scss']
})

export class RoutingComponent implements OnInit{
  beacons : Beacon[];
  
  routingBeacons : Beacon[];
  constructor(private beaconService : BeaconService, private router : Router){}
  ngOnInit(){
    this.beaconService
    .getRouting('2018-01-01', '2018-01-02', '07:30:00', '8:01:32')
    .subscribe((data : Beacon[]) =>{
      this.beacons = data;
      console.log(this.beacons[1]);
    });
  }

  getRouting(startDate, endDate, startTime, endTime){
    this.beaconService
    .getRouting(startDate,endDate,startTime,endTime)
    .subscribe((data: Beacon []) =>{
      this.routingBeacons = data;
      console.log(this.routingBeacons[1]);
    });
  }

  minValue: number = 0;
  maxValue: number = 24;
  options: Options = {
    ceil: 12,
    floor: 0,
    step: 24,
    translate: (value: number, label: LabelType): string => {
      var time = null;
      var hours = value;

      switch (label) {
        case LabelType.Low:
         if (hours < 12) {
           time = "AM";
         }
         else{
           time = "PM";
         }
         if (value == 0) {
          hours = 12;
        }
        if (hours > 12) {
            hours = hours - 12;
        }
          return '<b>Start</b> ' + hours + time;
        case LabelType.High:
          if (hours < 12 || hours == 24) {
            time = "AM";
          }
          else{
            time = "PM";
          }
          if (value == 0) {
            hours = 12;
          }
          if (hours > 12) {
              hours = hours - 12;
          }
          return '<b>End</b> ' + hours + time;
        default:
          return hours + time;
      }
    },
    showSelectionBar: true,
    stepsArray: [
      {value: 0},
      {value: 1, legend: 'AM'},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10},
      {value: 11},
      {value: 12, legend: 'PM'},
      {value: 13},
      {value: 14},
      {value: 15},
      {value: 16},
      {value: 17},
      {value: 18},
      {value: 19},
      {value: 20},
      {value: 21},
      {value: 22},
      {value: 23},
      {value: 24, legend: 'AM'}
    ],
    selectionBarGradient: {
      from: 'black',
      to: 'green', 

    },
    showTicks: true,
    draggableRange: true,
    
  };
}
