/*from library name*/
import {AfterViewInit, Component} from '@angular/core';

declare const h337: any;


@Component({
  selector: 'app-core-body-population-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})


declare var listItemD: any


/*can use outside of this file because of 'export'*/
export class HeatmapComponent implements AfterViewInit {

   ValueList: number []
         = [0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0]



  ngAfterViewInit() {
    const heatmap = h337.create({
      container: window.document.querySelector('#heatmap')
    });

    /* test data */
    heatmap.setData({
      max: 50,
      data: [
        //1
        {x: 85, y: 190, value: 50},

        //24
        {x: 126, y: 212, value: 30}, {x: 164, y: 219, value: 50}, {x: 162, y: 187, value: 30},
        {x: 184, y: 168, value: 10}, {x: 202, y: 150, value: 30}, {x: 220, y: 129, value: 70}, {x: 236, y: 110, value: 30},
        {x: 248, y: 93, value: 50}, {x: 263, y: 80, value: 30}, {x: 280, y: 61, value: 50}, {x: 295, y: 42, value: 30},
        {x: 313, y: 28, value: 10}, {x: 356, y: 35, value: 30}, {x: 285, y: 96, value: 50}, {x: 243, y: 163, value: 30},
        {x: 270, y: 178, value: 80}, {x: 300, y: 180, value: 30}, {x: 325, y: 180, value: 50}, {x: 325, y: 147, value: 30},
        {x: 332, y: 122, value: 50}, {x: 351, y: 103, value: 30}, {x: 379, y: 88, value: 50}, {x: 386, y: 69, value: 30},
        {x: 409, y: 54, value: 50}, {x: 438, y: 55, value: 30}, {x: 443, y: 32, value: 50}, {x: 465, y: 59, value: 30},
        {x: 489, y: 61, value: 50}, {x: 516, y: 63, value: 90}, {x: 544, y: 68, value: 50}, {x: 573, y: 72, value: 30},
        {x: 588, y: 97, value: 50}, {x: 450, y: 85, value: 30}, {x: 447, y: 113, value: 50}, {x: 432, y: 135, value: 30},
        {x: 393, y: 136, value: 70}, {x: 360, y: 180, value: 30}, {x: 395, y: 180, value: 50}, {x: 397, y: 209, value: 30},
        {x: 398, y: 240, value: 50}, {x: 412, y: 264, value: 60}, {x: 423, y: 287, value: 20}, {x: 390, y: 272, value: 30},
        {x: 400, y: 295, value: 50}, {x: 413, y: 314, value: 30}, {x: 420, y: 344, value: 45}, {x: 419, y: 372, value: 30},
        {x: 416, y: 399, value: 91}, {x: 524, y: 390, value: 30}, {x: 505, y: 391, value: 50}, {x: 488, y: 385, value: 30},
        {x: 518, y: 365, value: 50}, {x: 493, y: 366, value: 30}, {x: 504, y: 346, value: 50}, {x: 474, y: 340, value: 30},
        {x: 460, y: 315, value: 50}, {x: 460, y: 253, value: 30}, {x: 483, y: 231, value: 50}, {x: 495, y: 210, value: 30},
        {x: 480, y: 185, value: 50}, {x: 480, y: 157, value: 30}, {x: 454, y: 157, value: 50},

      ]

    });


  }
}




