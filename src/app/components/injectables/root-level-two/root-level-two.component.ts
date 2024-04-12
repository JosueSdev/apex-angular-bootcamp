import { Component } from '@angular/core';
import { RootInjectableService } from '../../../services/root-injectable.service';

@Component({
  selector: 'app-root-level-two',
  templateUrl: './root-level-two.component.html',
  styleUrl: './root-level-two.component.scss'
})
export class RootLevelTwoComponent {
  constructor(protected readonly service: RootInjectableService) {}
}
