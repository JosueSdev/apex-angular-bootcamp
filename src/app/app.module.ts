import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InjectablesModule } from './modules/injectables/injectables.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InjectablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
