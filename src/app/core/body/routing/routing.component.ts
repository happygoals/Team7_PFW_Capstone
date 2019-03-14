import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Beacon } from '../../../interfaces/beacon.interface';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

interface External {
  parseRouting: Function
  StoreValueForRouting: Function
  routeList: Variable
  routeBeacons: Variable
}

declare function parseRouting(list):any
declare var routeBeacons: any
declare var routeList:any
declare function StoreValueForRouting(Array): any
@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent implements OnInit{

  @ViewChild('canvasEl') canvasEl: ElementRef;

  private context: CanvasRenderingContext2D;

  positionToDraw: any;
  pathToDraw: any[];

  positions: any = [
    {x: 665.6, y: 638.4},
    {x: 136, y: 304},
    {x: 708.8, y: 51.2},
    {x: null, y: null},
    {x: 659.2, y: 422.4},
    {x: 676.8, y: 459.2},
    {x: 262.4, y: 350.4},
    {x: 456, y: 153.6},
    {x: 792, y: 336},
    {x: 561.6, y: 164.8},
    {x: 838.4, y: 624},
    {x: 940.8, y: 155.2},
    {x: null, y: null},
    {x: null, y: null},
    {x: null, y: null},
    {x: null, y: null},
    {x: null, y: null},
    {x: null, y: null},
    {x: null, y: null},
    {x: null, y: null},
    {x: 670.4, y: 595.2},
    {x: 624, y: 435.2},
    {x: 736, y: 448},
    {x: 636.8, y: 384},
    {x: 201.6, y: 339.2},
    {x: 700.8, y: 88},
    {x: null, y: null},
    {x: 660.8, y: 502.4},
    {x: 736, y: 404.8},
    {x: 632, y: 288},
    {x: 672, y: 550.4},
    {x: 736, y: 504},
    {x: 772.8, y: 369.6},
    {x: 569.6, y: 56},
    {x: 294.4, y: 268.8},
    {x: 640, y: 472},
    {x: 635.2, y: 334.4},
    {x: 628.8, y: 217.6},
    {x: 396.8, y: 148.8},
    {x: 448, y: 97.6},
    {x: 500.8, y: 44.8},
    {x: 259.2, y: 299.2},
    {x: 352, y: 206.4},
    {x: 420.8, y: 128},
    {x: 432, y: 284.8},
    {x: 531.2, y: 195.2},
    {x: 472, y: 67.2},
    {x: 323.2, y: 240},
    {x: 337.6, y: 176},
    {x: 520, y: 288},
    {x: 388.8, y: 260.8},
    {x: 606.4, y: 140.8},
    {x: 758.4, y: 544},
    {x: 480, y: 288},
    {x: 828.8, y: 584},
    {x: 576, y: 288},
    {x: 520, y: 235.2},
    {x: 806.4, y: 553.6},
    {x: 780.8, y: 616},
    {x: 744, y: 94.4},
    {x: 808, y: 625.6},
    {x: 788.8, y: 585.6},
    {x: 825.6, y: 100.8},
    {x: 916.8, y: 115.2},
    {x: 720, y: 136},
    {x: 782.4, y: 97.6},
    {x: 726.4, y: 251.2},
    {x: 768, y: 296},
    {x: 715.2, y: 180.8},
    {x: 870.4, y: 108.8},
    {x: 691.2, y: 216},
    {x: 771.2, y: 251.2},
    {x: 617.6, y: 110.4},
    {x: null, y: null},
    {x: null, y: null},
    {x: 654.4, y: 86.4} 
]

  public beacons : Beacon[];
  public beacon : Beacon;
  public routeBeacons: Beacon[];
  errorMessage: String;
  public routes : any = 0;
  public beaconSet : any[];

  routingBeacons : Beacon[];

  //initialize the canvas 
  ngOnInit(){
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    
  }

  //function to get the output from child component for creating the routing chart
  GetOutput(selected: any){
    if(selected)
    {
      this.beacons = selected;
      this.callParse()
    }
  }

  //function to get the output from the child component for drawing the canvas
  GetOutputCanvas(selected: any){
    if(selected)
    {
      this.positionToDraw = selected;
      this.arrayToDraw(this.positionToDraw)

      this.draw()
    }
  }

  //funciton to call the parsing for the dataset
  callParse() {
    parseRouting(this.beacons);
    StoreValueForRouting(routeBeacons)
    this.routes = null;
    this.routes = routeList
  }

  //function to draw the route path when a bubble on the chart is clicked
  private draw() {
    this.context.clearRect(0,0, 1042, 672);

    this.context.beginPath();
    for(var i = 0; i< this.pathToDraw.length; i++){
      let temp: number = this.pathToDraw[i];
      this.pathToDraw
      this.context.arc(this.positions[this.pathToDraw[i]].x, this.positions[this.pathToDraw[i]].y, 0, 0, 2 * Math.PI);
      var gradient = this.context.createLinearGradient(230, 230, 0, 0);
      gradient.addColorStop(0, "green");
      gradient.addColorStop(0.5 ,"blue");
      gradient.addColorStop(1.0, "red");
      
    this.context.strokeStyle = gradient;
      this.context.lineWidth = 3;
      this.context.stroke();
    }
    let length:number = this.pathToDraw.length -1
    this.context.beginPath();
    this.context.arc(this.positions[this.pathToDraw[0]].x, this.positions[this.pathToDraw[0]].y, 10, 0, 2 * Math.PI);
    this.context.fillStyle="green";
    this.context.fill();
    this.context.beginPath();
    this.context.arc(this.positions[this.pathToDraw[length]].x, this.positions[this.pathToDraw[length]].y, 10, 0, 2 * Math.PI);
    this.context.fillStyle="red";
    this.context.fill();
  }

  //function to determine what route to draw on the canvas
  private arrayToDraw(value: number){

    if(value === 0){
      this.pathToDraw = [0,58, 60, 10]
    }
    if(value === 1){
      this.pathToDraw = [0, 20, 30, 27, 35, 5]
    }
    if(value === 2){
      this.pathToDraw = [0, 20, 30, 27, 35, 21, 4]
    }
    if(value === 3){
      this.pathToDraw = [0 ,20 ,30 ,27 ,35 ,21 ,23 ,36 ,29 ,37 ,51 ,9]
    }
    if(value === 4){
      this.pathToDraw = [0 ,20 ,30 ,27 ,35 ,21 ,23 ,36 ,29 ,37 ,51 ,72 ,75 ,33 ,40 ,46 ,39 ,7]
    }
    if(value === 5){
      this.pathToDraw = [0 ,20 ,30 ,27 ,35 ,21 ,23 ,36 ,29 ,55 ,49 ,53 ,44 ,50 ,42 ,48 ,38 ,43 ,7]
    }
    if(value === 6){
      this.pathToDraw = [0 ,20 ,30 ,27 ,35 ,21 ,23 ,36 ,29 ,55 ,49 ,53 ,44 ,50 ,42 ,47 ,34 ,41 ,24 ,6]
    }
    if(value === 7){
      this.pathToDraw = [0 ,20 ,30 ,27 ,31 ,22 ,28 ,32 ,8]
    }
    if(value === 8){
      this.pathToDraw = [0 ,20 ,30 ,27 ,35 ,21 ,23 ,36 ,29 ,37 ,51 ,70 ,68 ,64 ,59 ,65 ,62 ,69 ,63 ,11]
    }
    if(value === 9){
      this.pathToDraw = [1 ,24 ,6]
    }
    if(value === 10){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,48 ,38 ,43 ,7]
    }
    if(value === 11){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,50 ,44 ,53 ,49 ,56 ,45 ,51 ,9]
    }
    if(value === 12){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,50 ,44 ,53 ,49 ,55 ,29 ,36 ,23 ,21 ,4]
    }
    if(value === 13){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,50 ,44 ,53 ,49 ,55 ,29 ,36 ,23 ,21 ,35 ,5]
    }
    if(value === 14){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,50 ,44 ,53 ,49 ,55 ,29 ,36 ,23 ,21 ,35 ,27 ,30 ,20 ,58 ,60 ,10]
    }
    if(value === 15){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,50 ,44 ,53 ,49 ,55 ,29 ,37 ,51 ,70 ,66 ,71 ,67 ,8]
    }
    if(value === 16){
      this.pathToDraw = [1 ,24 ,41 ,34 ,47 ,42 ,50 ,44 ,53 ,49 ,55 ,29 ,37 ,51 ,70 ,68 ,64 ,59 ,65 ,62 ,69 ,63 ,11]
    }
    if(value === 17){
      this.pathToDraw = [2 ,25 ,59 ,65 ,62 ,69 ,63 ,11]
    }
    if(value === 18){
      this.pathToDraw = [2 ,25 ,33 ,40 ,46 ,39 ,7]
    }
    if(value === 19){
      this.pathToDraw = [2 ,25 ,33 ,40 ,46 ,39 ,43 ,38 ,48 ,42 ,47 ,34 ,41 ,24 ,6]
    }
    if(value === 20){
      this.pathToDraw = [2 ,25 ,75 ,72 ,51 ,9]
    }
    if(value === 21){
      this.pathToDraw = [2 ,25 ,75 ,72 ,51 ,70 ,66 ,71 ,67 ,8]
    }
    if(value === 22){
      this.pathToDraw = [2 ,25 ,64 ,68 ,70 ,66 ,71 ,67 ,8]
    }
    if(value === 23){
      this.pathToDraw = [2 ,25 ,75 ,72 ,51 ,37 ,29 ,36 ,23 ,21 ,4]
    }
    if(value === 24){
      this.pathToDraw = [2 ,25 ,75 ,72 ,51 ,37 ,29 ,36 ,23 ,21 ,35 ,5]
    }
    if(value === 25){
      this.pathToDraw = [2 ,25 ,75 ,72 ,51 ,37 ,29 ,36 ,23 ,21 ,35 ,27 ,30 ,20 ,58 ,60 ,10]
    }
    if(value === 26){
      this.pathToDraw = [0,58, 60, 10]
    }
    if(value === 27){
      this.pathToDraw = [0,58, 60, 10]
    }

  }
}
