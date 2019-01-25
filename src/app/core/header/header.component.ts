import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';


@Component({
  selector: 'app-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
<<<<<<< HEAD
  if (selected) {
    selected = false;
  }

  someMethod() {
=======
  someMethod(){
>>>>>>> 53bf81caae4f42bf7ea2602dbdbf832909407bec
    this.trigger.openMenu();
  }
}
