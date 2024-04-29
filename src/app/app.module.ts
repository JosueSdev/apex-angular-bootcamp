import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AModule } from './modules/a/a.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BModule } from './modules/b/b.module';
import { ItemsListModule } from './modules/items-list/items-list.module';
import { ItemsModule } from './modules/items/items.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    /* Routing modules */
    AModule,
    BModule,
    AppRoutingModule,
    ItemsListModule,
    ItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
