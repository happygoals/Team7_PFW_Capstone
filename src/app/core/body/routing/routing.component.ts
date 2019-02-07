import { Component} from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent {
  minValue: number = 0;
  maxValue: number = 24;
  options: Options = {
    ceil: 24,
    floor: 0,
    showSelectionBar: true,
    stepsArray: [
      {value: 12, legend: 'AM'},
      {value: 1},
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
      {value: 1},
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
      {value: 12, legend: 'AM'}
    ],
    getTickColor: (value: number): string => {
      if (value < 3) {
        return 'red';
      }
      if (value < 7) {
        return 'orange';
      }
      if (value < 10) {
        return 'yellow';
      }
      return '#2AE02A';
    },
    selectionBarGradient: {
      from: 'white',
      to: 'green',
    },
    showTicks: true,
    draggableRange: true
  };
}
