import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteAComponent } from './components/route-a/route-a.component';
import { DynamicSlugComponent } from './components/dynamic-slug/dynamic-slug.component';

const routes: Routes = [
  {
    path: "a",
    component: RouteAComponent,
  },
  { path: "b", loadChildren: () => import('./modules/lazy-route/lazy-route.module').then(m => m.LazyRouteModule) },
  {
    path: "c/:slug",
    component: DynamicSlugComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
