import { Component } from '@angular/core';
import { RootInjectableService } from '../../../services/root-injectable.service';

@Component({
  selector: 'app-root-level-one',
  templateUrl: './root-level-one.component.html',
  styleUrl: './root-level-one.component.scss'
})
export class RootLevelOneComponent {
  constructor(protected readonly service: RootInjectableService) {}
}
