import { Component} from '@angular/core';


@Component({
  selector: 'app-core-body-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})

export class RoutingComponent {
  items = Array.from({length: 12}).map((_, i) => ` ${i}`);
}
