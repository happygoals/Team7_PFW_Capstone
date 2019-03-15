import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
      this.href = this.router.url;
      if(this.href === '/settings'){
        return;
      }
      else if(this.href === '/population'){
        document.getElementById('popbutton').style.backgroundColor = '#27e9b6';
        document.getElementById('popbutton').style.color = 'white';
      }
      else{
        document.getElementById('routingbutton').style.backgroundColor = '#27e9b6';
        document.getElementById('routingbutton').style.color = 'white';
      }
  }

  if (selected) {
    selected = false;
  }

  someMethod() {

    this.trigger.openMenu();
  }


}
