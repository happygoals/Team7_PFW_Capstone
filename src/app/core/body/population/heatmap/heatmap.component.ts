/*from library name*/
import {AfterViewInit, Component} from '@angular/core';

declare const h337: any;
declare var listItemD: any


@Component({
  selector: 'app-core-body-population-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})



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
        {x: 126, y: 212, value: 30}, /* 6 */{x: 164, y: 219, value: 50}, /* 41 */{x: 162, y: 187, value: 30},
        /* 34 */{x: 184, y: 168, value: 10}, /* 47 */{x: 202, y: 150, value: 30}, /* 42 */{x: 220, y: 129, value: 70}, /* 48 */{x: 236, y: 110, value: 30},
        /* 38 */{x: 248, y: 93, value: 50}, /* 43 */{x: 263, y: 80, value: 30}, /* 39 */{x: 280, y: 61, value: 50}, /* 46 */{x: 295, y: 42, value: 30},
        /* 40 */{x: 313, y: 28, value: 10}, /* 33 */{x: 356, y: 35, value: 30}, /* 7 */{x: 285, y: 96, value: 50}, /* 50 */{x: 243, y: 163, value: 30},
        /* 44 */{x: 270, y: 178, value: 80}, /* 53 */{x: 300, y: 180, value: 30}, /* 49 */{x: 325, y: 180, value: 50}, /* 56 */{x: 325, y: 147, value: 30},
        /* 45 */{x: 332, y: 122, value: 50}, /* 9 */{x: 351, y: 103, value: 30}, /* 51 */{x: 379, y: 88, value: 50}, /* 72 */{x: 386, y: 69, value: 30},
        /* 75 */{x: 409, y: 54, value: 50}, /* 6 */{x: 438, y: 55, value: 30}, /* 2 */{x: 443, y: 32, value: 50}, /* 59 */{x: 465, y: 59, value: 30},
        /* 65 */{x: 489, y: 61, value: 50}, /* 62 */{x: 516, y: 63, value: 90}, /* 69 */ {x: 544, y: 68, value: 50}, /* 63 */{x: 573, y: 72, value: 30},
        /* 11 */{x: 588, y: 97, value: 50}, /* 64 */{x: 450, y: 85, value: 30}, /* 68 */{x: 447, y: 113, value: 50}, /* 70 */{x: 432, y: 135, value: 30},
        /* 37 */{x: 393, y: 136, value: 70}, /* 55 */{x: 360, y: 180, value: 30}, /* 29 */{x: 395, y: 180, value: 50}, /* 36 */{x: 397, y: 209, value: 30},
        /* 23 */{x: 398, y: 240, value: 50}, /* 4 */{x: 412, y: 264, value: 60}, /* 5 */{x: 423, y: 287, value: 20}, /* 21 */{x: 390, y: 272, value: 30},
        /* 35 */{x: 400, y: 295, value: 50}, /* 27 */{x: 413, y: 314, value: 30}, /* 30 */{x: 420, y: 344, value: 45}, /* 20 */{x: 419, y: 372, value: 30},
        /* 0 */{x: 416, y: 399, value: 91}, /* 10 */{x: 524, y: 390, value: 30}, /* 60 */{x: 505, y: 391, value: 50}, /* 58 */{x: 488, y: 385, value: 30},
        /* 54 */{x: 518, y: 365, value: 50}, /* 61 */{x: 493, y: 366, value: 30}, /* 57 */{x: 504, y: 346, value: 50}, /* 52 */{x: 474, y: 340, value: 30},
        /* 31 */{x: 460, y: 315, value: 50}, /* 28 */{x: 460, y: 253, value: 30}, /* 32 */{x: 483, y: 231, value: 50}, /* 8 */{x: 495, y: 210, value: 30},
        /* 67 */{x: 480, y: 185, value: 50}, /* 71 */{x: 480, y: 157, value: 30}, /* 66 */{x: 454, y: 157, value: 50},

      ]

    });


  }
}




