import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';

@Component({
  selector: 'app-core-body-routing-chart',
  templateUrl: './chart.component.html',
  styleUrls: []
})

export class ChartComponent {
    @ViewChild('myChart') myChart: jqxChartComponent;
    @ViewChild('dropDownSerie1Symbol') dropDownSerie1Symbol: jqxDropDownListComponent;
    @ViewChild('dropDownSerie2Symbol') dropDownSerie2Symbol: jqxDropDownListComponent;

    sampleData: any = [
        { Visit: '1', SalesQ1: 310500, SalesQ2: 210500, SalesQ3: 110500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 22 },
        { Visit: '2', SalesQ1: 120000, SalesQ2: 169000, SalesQ3: 110500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 22 },
        { Visit: '3', SalesQ1: 205000, SalesQ2: 275500, SalesQ3: 110500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 22 },
        { Visit: '4', SalesQ1: 187000, SalesQ2: 130100, SalesQ3: 310500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 22 },
        { Visit: '5', SalesQ1: 187000, SalesQ2: 113000, SalesQ3: 160500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 22 },
        { Visit: '6', SalesQ1: 142000, SalesQ2: 102000, SalesQ3: 180500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 22 },
        { Visit: '7', SalesQ1: 171000, SalesQ2: 124000, SalesQ3: 190500, YoYGrowthQ1: 50, YoYGrowthQ2: 10, YoYGrowthQ3: 21 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		return (document.body.offsetWidth-700);
    }

    getHeight() : any {
		return (document.body.offsetHeight-250);
	}

    xAxis: any =
    {
        dataField: 'Visit',
        valuesOnTicks: false
    };

    valueAxis: any =
    {
        unitInterval: 50000,
        minValue: 50000,
        maxValue: 350000,
        title: { text: 'Beacon Number' },
        labels: {
            formatSettings: { prefix: '', thousandsSeparator: ',' },
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'bubble',
            series: [
                { dataField: 'SalesQ1', radiusDataField: 'YoYGrowthQ1', minRadius: 50, maxRadius: 50, displayText: 'Path 1' },
                { dataField: 'SalesQ2', radiusDataField: 'YoYGrowthQ2', minRadius: 20, maxRadius: 20, displayText: 'Path 2' },
                { dataField: 'SalesQ3', radiusDataField: 'YoYGrowthQ3', minRadius: 15, maxRadius: 15, displayText: 'Path 3' }
            ]
        }
    ];

    symbolsList: string[] = ['circle', 'diamond', 'square', 'triangle_up', 'triangle_down', 'triangle_left', 'triangle_right'];

    dropDown1OnChange(event: any) {
        let value = event.args.item.value;
        this.myChart.seriesGroups()[0].series[0].symbolType = value;
        this.myChart.update();
    }

    dropDown2OnChange(event: any) {
        let value = event.args.item.value;
        this.myChart.seriesGroups()[0].series[1].symbolType = value;
        this.myChart.update();
    }
}
