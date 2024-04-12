import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleLevelInjectionService } from '../../services/module-level-injection.service';

import { ModuleLevelInjectionComponent } from '../../components/injectables/module-level/module-level.component';
import { InjectablesComponent } from '../../components/injectables/injectables.component';

import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';



@NgModule({
  declarations: [
    ModuleLevelInjectionComponent,
    InjectablesComponent
  ],
  imports: [
    CommonModule,
    OneModule,
    TwoModule
  ],
  exports: [InjectablesComponent],
  providers: [ModuleLevelInjectionService]
})
export class InjectablesModule { }
