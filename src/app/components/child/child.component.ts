import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // the input() decorator signifies that item variable can receive value from
  // the parent commponent
  @Input() item: string = '';

}
