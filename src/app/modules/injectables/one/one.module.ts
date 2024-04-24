import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLevelOneComponent } from '../../../components/injectables/root-level-one/root-level-one.component';



@NgModule({
  declarations: [
    RootLevelOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RootLevelOneComponent]
})
export class OneModule { }
