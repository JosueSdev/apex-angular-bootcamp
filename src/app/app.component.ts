import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private active = true;

  toggle = () => this.active = !this.active;

  getClass = () => this.active ? 'redText' : undefined;

  getStyle = () => this.active ? { color: 'red' } : undefined
}
