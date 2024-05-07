import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFirstComponent } from '../../components/my-first/my-first.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MyFirstComponent,
  }
];

@NgModule({
  declarations: [
    MyFirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class MyFirstModule { }
