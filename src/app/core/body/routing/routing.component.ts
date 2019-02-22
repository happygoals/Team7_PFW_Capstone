import { Component, OnInit } from '@angular/core';
import { Options, LabelType, ChangeContext, PointerType } from 'ng5-slider';
import { BeaconService } from '../../../services/beacon.service';
import { Beacon } from '../../../interfaces/beacon.interface';
import { Router, UrlSegment } from '@angular/router';
import { MatDatepickerInputEvent, MatDatepicker, MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import { Timeset } from './timeset';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css', './routing.component.scss']
})

export class RoutingComponent implements OnInit {

  isCollapsed: boolean = true; // for the add button of multiple time sliders : expansion

  /* user-event-slider START */
  logText: string = ''; // to print the time result

  startTime: string = ""; // to store the time string for low
  endTime: string = ""; // to store the time string for high

  // get change result for time selection
  onUserChange(changeContext: ChangeContext): void {
    // this.logText += `Change(${this.getChangeContextString(changeContext)})\n`;
  }
  // get end result for time selection
  onUserChangeEnd(changeContext: ChangeContext): void {
    // this.logText += `End(${this.getChangeContextString(changeContext)})\n`;
    this.startTime = `${this.getChangeStartString(changeContext)}`;
    this.endTime = `${this.getChangeEndString(changeContext)}`;
    this.logText += this.startTime + ` ` + this.endTime +`\n` ;
  }

  // Update the string Starttime value
  getChangeStartString(changeContext: ChangeContext): string {
    var zerolowValue = (changeContext.value < 10) ? "0": ""; // to put zero for the time format
    this.startTime = `${zerolowValue}${changeContext.value}:00:00`; // selected start time
    return this.startTime;
  }

  // Update the string Starttime value
  getChangeEndString(changeContext: ChangeContext): string {
    var zerohighValue = (changeContext.highValue < 10) ? "0": ""; // to put zero for the time format
    this.endTime = `${zerohighValue}${changeContext.highValue}:00:00`; // selected end time
    return this.endTime;
  }
  /* user-event-slider END */

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
  constructor(private beaconService: BeaconService, private router: Router, private datePipe: DatePipe) { }
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
  // Date Picker Extraction Method

  events: string[] = [];
  startDate: string = "";   // Start Date
  endDate: string = "";     // End Date

  // Start Date Listener
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const eventDate = new Date(event.value); // Datepicker Date Value
    const formattedDate = this.datePipe.transform(eventDate, 'yyyy-MM-dd'); // Formatted new Date
    const tempStartDate = new Date(Date.parse(this.startDate));
    const tempEndDate = new Date(Date.parse(this.endDate));

    // Checking to make sure end date isn't before start date (BROKEN)
    /*
      if((this.startDate != '' && this.endDate != '') || (this.startDate != '' && this.endDate == '')
      || (this.startDate == '' && this.endDate != '')){
        if(tempStartDate.valueOf() > tempEndDate.valueOf() ){
          alert('You cannot have a start date after the end date!');
          return;
        }
        else if(tempEndDate.valueOf() < tempStartDate.valueOf()){
          alert('You cannot have an end date before the start date!');
          return;
        }
      }
    */

    // Checking for which datepicker is being used
    if(event.targetElement.id == 'dp1'){  // Checks for Datepicker 1
      this.startDate = formattedDate;
    }
    else if( event.targetElement.id == 'dp2'){ // checks for Datepicker 2
      this.endDate = formattedDate;
    }
  }

  // End of Date Extraction

  // Toggle Slider Logic

  toggle(event: MatSlideToggleChange) {

    if ( event.checked){
      document.getElementById('dp2_div').style.display = '';
    }
    else {
      document.getElementById('dp2_div').style.display = 'none';
    }
  }

  // End of Toggle Slider Logic

  // Reset Button Logic

  

  // End of Reset Button Logic
}

