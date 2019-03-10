import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


@Component({
  selector: 'app-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {


  
  
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  if (selected) {
    selected = false;
  }

  someMethod() {

    this.trigger.openMenu();
  }

  color1 : boolean = false; 
  color2 : boolean = false; 

  colorChange(){
    this.color1 = true; 
    this.color2 = false;
  }
  
}
