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

import { LocalizationService } from './localization/localization.service';
import { LOCALIZATIONS } from './localization/localization';
//import { LOCALIZATION_PROVIDERS } from './localization/localization';
import { lookup } from './localization/localization';
import { LocalizationPipe } from './localization/localization.pipe';
import { HelpComponent } from './help/help.component';

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
    EventDroppableDirective,
    LocalizationPipe,
    HelpComponent
  ],
  imports: [ /** All the angular modules need to be imported here**/
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  //providers: [EventService], /** All the Services need to be provided here**/
  /**
   *  The below definition is the expanded form of
   *  the above commented way to declare the providers in 
   *  the component class. Below array contains 'provide' object literals 
   *  that contains a pair of token(sometimes an opaque token) and a definition object.
   *  The definition object has one main property, (e.g. useClass) 
   *  that indicates how the provider should create or return the provided value.
   *  Set the useClass property to a fixed value that the provider 
   *  can return as the dependency object. Technique to provide runtime configuration
   *  constants such as web-site base addresses and feature flags.
   *  In this case, the provider token is a class that is also the type of 
   *  the returned dependency object (what we usually call the service).
   */
  providers: [
    { provide: EventService,   useClass:    EventService },
    { provide: LocalizationService,   useClass:    LocalizationService },
    { provide: LOCALIZATIONS, useValue: lookup }
    //{ provide: LOCALIZATION_PROVIDERS, useValue: LOCALIZATION_PROVIDERS }
  ],
  bootstrap: [AppComponent]  /** It is where component is bootstrapped**/
})
export class AppModule { }