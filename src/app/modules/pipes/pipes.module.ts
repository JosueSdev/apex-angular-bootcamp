import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from '../../components/pipes/pipes.component';
import { CustomPipe } from '../../pipes/custom.pipe';



@NgModule({
  declarations: [
    PipesComponent,
    CustomPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipesComponent
  ]
})
export class PipesModule { }
