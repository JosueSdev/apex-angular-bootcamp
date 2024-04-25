import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { A2Component } from './a2.component';

const routes: Routes = [
  {
    path: '',
    component: A2Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A2RoutingModule { }
