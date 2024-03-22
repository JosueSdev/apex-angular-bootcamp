import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected active = false;
  protected styles: Record<string, string> = { color: 'red' };

  toggle = () => this.active = !this.active;
}
