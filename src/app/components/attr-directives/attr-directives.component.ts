import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attr-directives.component.html',
  styleUrl: './attr-directives.component.scss'
})
export class AttrDirectivesComponent {
  protected active = false;
  protected styles: {
    [key: string]: string;
  } = { color: 'red' };

  toggle = () => this.active = !this.active;
}
