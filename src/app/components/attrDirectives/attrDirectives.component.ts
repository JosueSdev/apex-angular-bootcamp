import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-directives',
  templateUrl: './attrDirectives.component.html',
  styleUrl: './attrDirectives.component.scss'
})
export class AttrDirectivesComponent {
  protected active = false;
  protected styles: {
    [key: string]: string;
  } = { color: 'red' };

  toggle = () => this.active = !this.active;
}
