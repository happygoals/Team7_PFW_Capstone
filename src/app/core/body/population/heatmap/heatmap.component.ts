/*from library name*/
import {AfterViewInit, Component} from '@angular/core';

declare const h337: any;


@Component({
  selector: 'app-core-body-population-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: []
})

/*can use outside of this file because of 'export'*/
export class HeatmapComponent implements AfterViewInit {

  ngAfterViewInit() {
    const heatmap = h337.create({
      container: window.document.querySelector('#heatmap')
    });

    /* test data */
    heatmap.setData({
      max: 50,
      data: [{x: 85, y: 190, value: 50}, {x: 126, y: 212, value: 30} ]

    });


  }
}




