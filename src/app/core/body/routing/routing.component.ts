import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Options, LabelType, ChangeContext, PointerType } from 'ng5-slider';
import { BeaconService } from '../../../services/beacon.service';
import { Beacon } from '../../../interfaces/beacon.interface';
import { Router, UrlSegment } from '@angular/router';
import { MatDatepickerInputEvent, MatDatepicker, MatSlideToggleChange, MatSlideToggle, MatInput, MatButton } from '@angular/material';
import { Timeset } from './timeset';
import { DatePipe } from '@angular/common';
import { Variable } from '@angular/compiler/src/render3/r3_ast';


interface External {
  help: Function
  k: Variable
  par: Function
  beaconList: Variable
}

declare function help(string): any
declare function par(list):any
declare var k: any

@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css', './routing.component.scss']
})

export class RoutingComponent implements OnInit{

  public beacons : Beacon[];
  public beacon : Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public beaconSet : any[];


  ary: any = ["2018-01-19", "2018-01-20", "07:30:00", "08:01:32"];
  startDate: string = '2018-01-19';
  endDate: string = '2018-01-29';
  startTime: string = '07:30:00';
  endTime: string = '07:50:00';
  routingBeacons : Beacon[];

  constructor(private beaconService: BeaconService, private router: Router, private datePipe: DatePipe) { }
  ngOnInit() {
    //help(k)
    //help(this.startTime)
    this.getBeaconSets(this.startDate, this.endDate, this.startTime, this.endTime);

  }

  callParse(){
    console.log('prased');
    par(this.beacons)
  }
  getAll(){
    this.beaconService.getAllBeacons()
    .subscribe(
      (data : Beacon[]) =>{
          this.beacons = data;
          console.log(this.beacons);
          console.log(this.beacons[1]);
        });
  }
  getBeaconSets(startDate, endDate, startTime, endTime){
    this.beaconService.getBeaconSets(startDate, endDate, startTime, endTime)
    .subscribe(
      (data : Beacon[]) =>{
          this.beacons = data;
          console.log(this.beacons);
        });
  }

  /* user-event-slider START */
  logText: string = ''; // to print the time result

  //startTime: string = null; // to store the time string for low
  //endTime: string = null; // to store the time string for high

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
    this.getBeaconSets(this.startDate, this.endDate, this.startTime, this.endTime);
    return this.startTime;
  }

  // Update the string Starttime value
  getChangeEndString(changeContext: ChangeContext): string {
    var zerohighValue = (changeContext.highValue < 10) ? "0": ""; // to put zero for the time format
    this.endTime = `${zerohighValue}${changeContext.highValue}:00:00`; // selected end time
    this.getBeaconSets(this.startDate, this.endDate, this.startTime, this.endTime);
    return this.endTime;
  }
  /* user-event-slider END */

    /* button*/
  onSelect(reset: Timeset) {
    console.log(JSON.stringify(reset));
  }

  panelOpenState = false;

  /* Start Time Picker Variables */
  minValue1: number = 0;
  maxValue1: number = 24;
    /* Time slider value reset */
    sliderForm: FormGroup = new FormGroup({
      sliderControl: new FormControl([0, 24])
    })

     /* Time slider value reset finished */
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
  resetForm(): void {
    this.sliderForm.reset({sliderControl: [0, 24]});
  }
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
  //startDate: string = null;   // Start Date
  //endDate: string = null;     // End Date

  // Start Date Listener
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const eventDate = new Date(event.value); // Datepicker Date Value
    const formattedDate = this.datePipe.transform(eventDate, 'yyyy-MM-dd'); // Formatted new Date
    const tempStartDate = new Date(Date.parse(this.startDate));
    const tempEndDate = new Date(Date.parse(this.endDate));

    this.getBeaconSets(this.startDate, this.endDate, this.startTime, this.endTime);
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

  // Start of Date Reset button logic
   @ViewChild('dp1', {
    read: MatInput
  }) dp1: MatInput;

  @ViewChild('dp2', {
    read: MatInput
  }) dp2: MatInput;

  @ViewChild('slidetoggle', {
    read: MatSlideToggle
  }) slidetoggle: MatSlideToggle;

  resetDate(type: MatButton){
    this.dp1.value = '';
    this.dp2.value = '';
    this.slidetoggle.checked = false;
    document.getElementById('dp2_div').style.display = 'none';
  }

  // End of date reset button logic

}
