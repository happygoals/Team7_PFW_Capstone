import { Component, Inject, OnInit} from '@angular/core';
import { BeaconService } from '../../../services/beacon.service';


@Component({
  selector: 'app-core-body-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})

export class PopulationComponent {

  beaconService: any;


  ngOnInit(){
    this.getByID(231);
  }
  getByID(data){
    var results = this.beaconService.getByID(data)
    console.log(results)
  }

}
