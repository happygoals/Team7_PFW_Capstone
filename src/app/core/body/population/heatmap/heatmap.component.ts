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

   heatList: number []
         = [0,0,0,0,0,0,0,0,0,0,0,
            0,0,77,0,0,12,0,0,55,0,0,
            0,0,43,0,21,0,0,0,0,24,0,
            0,33,0,0,67,0,0,0,0,22,0,
            0,0,0,42,0,0,0,0,0,0,0,
            0,75,0,0,74,75,0,0,0,0,0,
            0,0,55,44,0,0,75,66,74,21,0,
            0,0,66,0,0]





  ngAfterViewInit() {
    var heatmap = h337.create({
      container: window.document.querySelector('#heatmap')
    });


    /* test data */
    heatmap.setData({
      max: 75,
      data: [
        /* 1 */{x: 85, y: 190, value: this.heatList[1]},
        /* 24 */{x: 126, y: 212, value: this.heatList[24]},
        /* 6 */{x: 164, y: 219, value: this.heatList[6]},
        /* 41 */{x: 162, y: 187, value: this.heatList[41]},
        /* 34 */{x: 184, y: 168, value: this.heatList[34]},
        /* 47 */{x: 202, y: 150, value: this.heatList[47]},
        /* 42 */{x: 220, y: 129, value: this.heatList[42]},
        /* 48 */{x: 236, y: 110, value: this.heatList[48]},
        /* 38 */{x: 248, y: 93, value: this.heatList[38]},
        /* 43 */{x: 263, y: 80, value: this.heatList[43]},
        /* 39 */{x: 280, y: 61, value: this.heatList[39]},
        /* 46 */{x: 295, y: 42, value: this.heatList[46]},
        /* 40 */{x: 313, y: 28, value: this.heatList[40]},
        /* 33 */{x: 356, y: 35, value: this.heatList[33]},
        /* 7 */{x: 285, y: 96, value: this.heatList[7]},
        /* 50 */{x: 243, y: 163, value: this.heatList[50]},
        /* 44 */{x: 270, y: 178, value: this.heatList[44]},
        /* 53 */{x: 300, y: 180, value: this.heatList[53]},
        /* 49 */{x: 325, y: 180, value: this.heatList[49]},
        /* 56 */{x: 325, y: 147, value: this.heatList[56]},
        /* 45 */{x: 332, y: 122, value: this.heatList[45]},
        /* 9 */{x: 351, y: 103, value: this.heatList[9]},
        /* 51 */{x: 379, y: 88, value: this.heatList[51]},
        /* 72 */{x: 386, y: 69, value: this.heatList[72]},
        /* 75 */{x: 409, y: 54, value: this.heatList[75]},
        /* 6 */{x: 438, y: 55, value: this.heatList[6]},
        /* 2 */{x: 443, y: 32, value: this.heatList[2]},
        /* 59 */{x: 465, y: 59, value: this.heatList[59]},
        /* 65 */{x: 489, y: 61, value: this.heatList[65]},
        /* 62 */{x: 516, y: 63, value: this.heatList[62]},
        /* 69 */ {x: 544, y: 68, value: this.heatList[69]},
        /* 63 */{x: 573, y: 72, value: this.heatList[63]},
        /* 11 */{x: 588, y: 97, value: this.heatList[11]},
        /* 64 */{x: 450, y: 85, value: this.heatList[64]},
        /* 68 */{x: 447, y: 113, value: this.heatList[68]},
        /* 70 */{x: 432, y: 135, value: this.heatList[70]},
        /* 37 */{x: 393, y: 136, value: this.heatList[37]},
        /* 55 */{x: 360, y: 180, value: this.heatList[55]},
        /* 29 */{x: 395, y: 180, value: this.heatList[29]},
        /* 36 */{x: 397, y: 209, value: this.heatList[36]},
        /* 23 */{x: 398, y: 240, value: this.heatList[23]},
        /* 4 */{x: 412, y: 264, value: this.heatList[4]},
        /* 5 */{x: 423, y: 287, value: this.heatList[5]},
        /* 21 */{x: 390, y: 272, value: this.heatList[21]},
        /* 35 */{x: 400, y: 295, value: this.heatList[35]},
        /* 27 */{x: 413, y: 314, value: this.heatList[27]},
        /* 30 */{x: 420, y: 344, value: this.heatList[30]},
        /* 20 */{x: 419, y: 372, value: this.heatList[20]},
        /* 0 */{x: 416, y: 399, value: this.heatList[0]},
        /* 10 */{x: 524, y: 390, value: this.heatList[10]},
        /* 60 */{x: 505, y: 391, value: this.heatList[60]},
        /* 58 */{x: 488, y: 385, value: this.heatList[58]},
        /* 54 */{x: 518, y: 365, value: this.heatList[54]},
        /* 61 */{x: 493, y: 366, value: this.heatList[61]},
        /* 57 */{x: 504, y: 346, value: this.heatList[57]},
        /* 52 */{x: 474, y: 340, value: this.heatList[52]},
        /* 31 */{x: 460, y: 315, value: this.heatList[31]},
        /* 28 */{x: 460, y: 253, value: this.heatList[28]},
        /* 32 */{x: 483, y: 231, value: this.heatList[32]},
        /* 8 */{x: 495, y: 210, value: this.heatList[8]},
        /* 67 */{x: 480, y: 185, value: this.heatList[67]},
        /* 71 */{x: 480, y: 157, value: this.heatList[71]},
        /* 66 */{x: 454, y: 157, value: this.heatList[66]},

      ]

    });


  }
}




