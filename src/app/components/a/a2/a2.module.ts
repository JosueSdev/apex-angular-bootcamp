import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A2RoutingModule } from './a2-routing.module';
import { A2Component } from './a2.component';
import { ZModule } from '../../../modules/z/z.module';


@NgModule({
  declarations: [
    A2Component
  ],
  imports: [
    CommonModule,
    ZModule,
    A2RoutingModule
  ]
})
export class A2Module { }
