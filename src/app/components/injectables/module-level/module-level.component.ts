import { Component } from '@angular/core';
import { ModuleLevelInjectionService } from '../../../services/module-level-injection.service';

@Component({
  selector: 'app-injectables-module-level',
  templateUrl: './module-level.component.html',
  styleUrl: './module-level.component.scss'
})
export class ModuleLevelInjectionComponent {

  constructor(protected readonly service: ModuleLevelInjectionService) {}
}
