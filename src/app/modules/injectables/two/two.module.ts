import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLevelTwoComponent } from '../../../components/injectables/root-level-two/root-level-two.component';



@NgModule({
  declarations: [
    RootLevelTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RootLevelTwoComponent]
})
export class TwoModule { }
