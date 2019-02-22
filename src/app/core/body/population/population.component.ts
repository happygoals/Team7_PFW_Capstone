import { Component} from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { MatDatepickerInputEvent, MatDatepicker, MatSlideToggleChange, MatSlideToggle } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-core-body-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css', './population.component.scss']
})

export class PopulationComponent {

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
  constructor(private datePipe: DatePipe) {}

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

}
