import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { ZModule } from '../z/z.module';
import { B1Component } from '../../components/b/b1/b1.component';
import { B2Component } from '../../components/b/b2/b2.component';
import { B3Component } from '../../components/b/b3/b3.component';


@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component
  ],
  imports: [
    CommonModule,
    ZModule,
    BRoutingModule
  ]
})
export class BModule { }
