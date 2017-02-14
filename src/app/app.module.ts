import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import { EventComponent } from './event/event.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventService } from './event.service';

import { AppRoutingModule } from './app-routing.module';

/**
 * [enableProdMode To enable the production mode]
 */
enableProdMode();

/**
 * [NgModule]
 *  Declarations of all components, 
 *  Imports(of modules provided by angular), 
 *  Providers for services, 
 *  Bootstrapping the AppComponent are done here
 */
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }