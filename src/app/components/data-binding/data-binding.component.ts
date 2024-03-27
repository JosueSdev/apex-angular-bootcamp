import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  protected copy = "Hello world" as const;
  protected text: string = "Hello world";

  handleClick() {alert("I was triggered by an event")};
}
