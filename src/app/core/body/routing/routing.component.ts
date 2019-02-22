import { Component, OnInit } from '@angular/core';
import { BeaconService } from '../../../services/beacon.service';
import { Beacon } from '../../../interfaces/beacon.interface';
import { Router, UrlSegment } from '@angular/router';
import { Options, LabelType, ChangeContext, PointerType } from 'ng5-slider';
import { Timeset } from './timeset';

@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css', './routing.component.scss']
})

export class RoutingComponent implements OnInit {

  isCollapsed: boolean = true;

  /* user-event-slider */
  logText: string = ''; // to print the time result

  startTime: string = ""; // to store the time string for low
  endTime: string = ""; // to store the time string for high

  // get change result for time selection
  onUserChange(changeContext: ChangeContext): void {
    this.logText += `Change(${this.getChangeContextString(changeContext)})\n`;
  }
  // get end result for time selection
  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `End(${this.getChangeContextString(changeContext)})\n`;
  }

  // Change the string value
  getChangeContextString(changeContext: ChangeContext): string {
    var zerolowValue = (changeContext.value < 10) ? "0": "";
    var zerohighValue = (changeContext.highValue < 10) ? "0": "";

    this.endTime = `${zerolowValue}${changeContext.value}:00:00`;
    this.startTime = `${zerohighValue}${changeContext.highValue}:00:00`;

    return  this.startTime + `\n` + this.endTime;
  }

  

  /* button*/
  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  onSelect(reset: Timeset) {
    console.log(JSON.stringify(reset));
  }

  panelOpenState = false;
  beacons: Beacon[];

  routingBeacons: Beacon[];
  constructor(private beaconService: BeaconService, private router: Router) { }
  ngOnInit() {
    this.beaconService
      .getRouting('2018-01-01', '2018-01-02', '07:30:00', '8:01:32')
      // .getAllBeacons()
      .subscribe((data: Beacon[]) => {
        this.beacons = data;
        console.log(this.beacons[1]);
      });
  }

  getRouting(startDate, endDate, startTime, endTime) {
    this.beaconService
      .getRouting(startDate, endDate, startTime, endTime)
      .subscribe((data: Beacon[]) => {
        this.routingBeacons = data;
        console.log(this.routingBeacons[1]);
      });
  }

  /* Start Time Picker Variables */
  minValue1: number = 0;
  maxValue1: number = 24;
  options1: Options = {
    ceil: 12,
    floor: 0,
    step: 24,
    translate: (value: number, label: LabelType): string => {
      var time = null;
      var hours = value;
      // Convert military time to standard time 
      switch (label) {
        case LabelType.Low:
          if (hours < 12) {
            time = "AM";
          }
          else {
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
          else {
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
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
      { value: 11 },
      { value: 12 },
      { value: 13 },
      { value: 14 },
      { value: 15 },
      { value: 16 },
      { value: 17 },
      { value: 18 },
      { value: 19 },
      { value: 20 },
      { value: 21 },
      { value: 22 },
      { value: 23 },
      { value: 24 }
    ],
    selectionBarGradient: {
      from: '#1B5E20',
      to: 'black',
    },
    showTicks: true,
    draggableRange: true,

  };
  /* End Time Picker Variables */

  /* Start Time Picker 2 Variables */
  minValue2: number = 0;
  maxValue2: number = 24;
  options2: Options = {
    ceil: 12,
    floor: 0,
    step: 24,
    translate: (value: number, label: LabelType): string => {
      var time = null;
      var hours = value;
      // Convert military time to standard time 
      switch (label) {
        case LabelType.Low:
          if (hours < 12) {
            time = "AM";
          }
          else {
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
          else {
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
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
      { value: 11 },
      { value: 12 },
      { value: 13 },
      { value: 14 },
      { value: 15 },
      { value: 16 },
      { value: 17 },
      { value: 18 },
      { value: 19 },
      { value: 20 },
      { value: 21 },
      { value: 22 },
      { value: 23 },
      { value: 24 }
    ],
    selectionBarGradient: {
      from: '#1B5E20',
      to: 'black',
    },
    showTicks: true,
    draggableRange: true,
  };
  /* End Time Picker 2 Variables */
  /* Start Time Picker 3 Variables */
  /* Start Time Picker 3 Variables */
  minValue3: number = 0;
  maxValue3: number = 24;
  options3: Options = {
    ceil: 12,
    floor: 0,
    step: 24,
    translate: (value: number, label: LabelType): string => {
      var time = null;
      var hours = value;
      // Convert military time to standard time 
      switch (label) {
        case LabelType.Low:
          if (hours < 12) {
            time = "AM";
          }
          else {
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
          else {
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
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
      { value: 11 },
      { value: 12 },
      { value: 13 },
      { value: 14 },
      { value: 15 },
      { value: 16 },
      { value: 17 },
      { value: 18 },
      { value: 19 },
      { value: 20 },
      { value: 21 },
      { value: 22 },
      { value: 23 },
      { value: 24 }
    ],
    selectionBarGradient: {
      from: '#155A20',
      to: '#152816',
    },
    showTicks: true,
    draggableRange: true,
  };
  /* End Time Picker 3 Variables */
}

