import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { enableProdMode } from '@angular/core';
import { EventComponent } from './event/event.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventService } from './event.service';

import { AppRoutingModule } from './app-routing.module';
import { EventEditComponent } from './event-edit/event-edit.component';
import { EventFilterPipe } from './event-filter.pipe';
import { EventDraggableDirective } from './event-draggable.directive';
import { EventDroppableDirective } from './event-droppable.directive';

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
  declarations: [ /** All the components need to be declared here**/
    AppComponent,
    EventComponent,
    EventAddComponent,
    EventEditComponent,
    EventFilterPipe,
    EventDraggableDirective,
    EventDroppableDirective
  ],
  imports: [ /** All the angular modules need to be imported here**/
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EventService], /** All the Services need to be provided here**/
  bootstrap: [AppComponent]  /** It is where component is bootstrapped**/
})
export class AppModule { }