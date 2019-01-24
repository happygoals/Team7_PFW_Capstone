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
}
