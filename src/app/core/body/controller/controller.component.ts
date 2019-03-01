import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ChangeContext } from 'ng5-slider';
import { Timeset } from './../routing/timeset';
import { DatePipe } from '@angular/common';
import { BeaconService } from './../../../services/beacon.service';
import { Beacon } from './../../../services/beacon';
import { Component, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { MatButton, MatSlideToggle, MatInput, MatSlideToggleChange, MatDatepickerInputEvent } from '@angular/material';
import { LabelType, Options } from 'ng5-slider';
import { FormGroup, FormControl } from '@angular/forms';

interface External {
  help: Function;
  k: Variable;
  par: Function;
  beaconList: Variable;
  listItemD: Variable;
  listItem: Variable;
  StoreValueForHeatmap: Function
  returnValueForHeatMap: Function
}

declare function help(string): any;
declare function par(list): any;
declare var k: any;
declare var listItem: any
declare function returnValueForHeatMap():any
declare function StoreValueForHeatmap(Array): any

@Component({
  selector: "app-core-body-controller",
  templateUrl: "./controller.component.html",
  styleUrls: ["./controller.component.css", "./controller.component.scss"]
})

export class ControllerComponent {
  public beacons: Beacon[];
  public beacon: Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  heatList: any
  public beaconSet: any[];
  url = 'http://localhost:4200';
  url1 = 'http://localhost:4200/population';

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
    this.getBeaconSets(
      this.startDate,
      this.endDate,
      this.startTime,
      this.endTime
    );
  }

  callParse() {
    par(this.beacons);
    StoreValueForHeatmap(listItem)
    this.heatList = returnValueForHeatMap()
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

  /* user-event-slider START */
  logText: string = ""; // to print the time result

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
    this.logText += this.startTime + ` ` + this.endTime + `\n`;
  }

  // Update the string Starttime value
  getChangeStartString(changeContext: ChangeContext): string {
    var zerolowValue = changeContext.value < 10 ? "0" : ""; // to put zero for the time format
    this.startTime = `${zerolowValue}${changeContext.value}:00:00`; // selected start time
    this.getBeaconSets(
      this.startDate,
      this.endDate,
      this.startTime,
      this.endTime
    );

    return this.startTime;
  }

  // Update the string Starttime value
  getChangeEndString(changeContext: ChangeContext): string {
    var zerohighValue = changeContext.highValue < 10 ? "0" : ""; // to put zero for the time format
    this.endTime = `${zerohighValue}${changeContext.highValue}:00:00`; // selected end time
    this.getBeaconSets(
      this.startDate,
      this.endDate,
      this.startTime,
      this.endTime
    );

    return this.endTime;
  }
  /* user-event-slider END */

  /* button*/

  onSelect(reset: Timeset) {
    console.log(JSON.stringify(reset));
  }
  panelOpenState = false;

  /* Time slider value reset */
  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([0, 24])
  });

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
          } else {
            time = "PM";
          }
          if (value == 0) {
            hours = 12;
          }
          if (hours > 12) {
            hours = hours - 12;
          }
          return "<b>Start</b> " + hours + time;
        case LabelType.High:
          if (hours < 12 || hours == 24) {
            time = "AM";
          } else {
            time = "PM";
          }
          if (value == 0) {
            hours = 12;
          }
          if (hours > 12) {
            hours = hours - 12;
          }
          return "<b>End</b> " + hours + time;
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
      from: "#1B5E20",
      to: "black"
    },
    showTicks: true,
    draggableRange: true
  };
  /* End Time Picker Variables */

  // reset the time picker
  resetForm(): void {
    this.sliderForm.reset({ sliderControl: [0, 24] });
  }

  // Start of Date Picker Extraction Method

  events: string[] = [];

  // Start Date Listener
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const eventDate = new Date(event.value); // Datepicker Date Value
    const formattedDate = this.datePipe.transform(eventDate, "yyyy-MM-dd"); // Formatted new Date
    const tempStartDate = new Date(Date.parse(this.startDate));
    const tempEndDate = new Date(Date.parse(this.endDate));

    this.getBeaconSets(
      this.startDate,
      this.endDate,
      this.startTime,
      this.endTime
    );

    // Checking for which datepicker is being used
    if (event.targetElement.id == "dp1") {
      // Checks for Datepicker 1
      this.startDate = formattedDate;
    } else if (event.targetElement.id == "dp2") {
      // checks for Datepicker 2
      this.endDate = formattedDate;
    }
  }

  // End of Date Picker Extraction

  // Start of Toggle Slider Logic

  toggle(event: MatSlideToggleChange) {
    if (event.checked) {
      document.getElementById("dp2_div").style.display = "";
    } else {
      document.getElementById("dp2_div").style.display = "none";
    }
  }

  // End of Toggle Slider Logic

  // Start of Date Reset button logic
  @ViewChild("dp1", {
    read: MatInput
  })
  dp1: MatInput;

  @ViewChild("dp2", {
    read: MatInput
  })
  dp2: MatInput;

  @ViewChild("slidetoggle", {
    read: MatSlideToggle
  })
  slidetoggle: MatSlideToggle;

  resetDate(type: MatButton) {
    this.dp1.value = "";
    this.dp2.value = "";
    this.slidetoggle.checked = false;
    document.getElementById("dp2_div").style.display = "none";
  }

  // End of date reset button logic
}
