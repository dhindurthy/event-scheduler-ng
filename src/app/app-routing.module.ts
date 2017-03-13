import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event/event.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { HelpComponent } from './help/help.component';

/**
 * [myRoutes Place where the routes to 
 * different pages need to be mentioned 
 * and the default page to redirect as well]
 * @type {Routes}
 */
const myRoutes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'events',  component: EventComponent },
  { path: 'event-add',  component: EventAddComponent },
  { path: 'event-edit/:id/:i',  component: EventEditComponent },
  { path: 'help',  component: HelpComponent }
];

/**
 * Registering the Router Module
 */
@NgModule({
  imports: [ RouterModule.forRoot(myRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}