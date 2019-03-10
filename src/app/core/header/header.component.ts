import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
      this.href = this.router.url;
      alert(this.href);
  }

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
