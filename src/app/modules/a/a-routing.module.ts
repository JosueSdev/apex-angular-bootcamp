import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'a',
    children: [
      {
        path: 'a1',
        loadChildren: () => import('../../components/a/a1/a1.module').then(m => m.A1Module),
      },
      {
        path: 'a2',
        loadChildren: () => import('../../components/a/a2/a2.module').then(m => m.A2Module),
      },
      {
        path: 'a3',
        loadChildren: () => import('../../components/a/a3/a3.module').then(m => m.A3Module),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ARoutingModule { }
