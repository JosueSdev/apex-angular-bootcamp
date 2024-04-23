import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteAComponent } from './components/route-a/route-a.component';
import { DynamicSlugComponent } from './components/dynamic-slug/dynamic-slug.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteAComponent,
    DynamicSlugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
