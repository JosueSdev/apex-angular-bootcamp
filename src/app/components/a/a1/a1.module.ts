import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A1RoutingModule } from './a1-routing.module';
import { A1Component } from './a1.component';
import { ZModule } from '../../../modules/z/z.module';


@NgModule({
  declarations: [
    A1Component,
  ],
  imports: [
    CommonModule,
    ZModule,
    A1RoutingModule,
  ]
})
export class A1Module { }
