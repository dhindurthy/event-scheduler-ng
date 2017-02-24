import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

/**
 * Importing the property 'switchMap' as
 *  we are using/importing the 'Params' 
 *  which are the routeParams
 */
import 'rxjs/add/operator/switchMap';

/**
 * The ActivatedRoute and Params and Location
 * are Angular services being imported because we have 
 * route params('id' in this case) being 
 * retrieved from the navigated path. the location service 
 * is imported because we want to it to navigate 
 * back through this page
 */
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

@Component({
	moduleId: module.id,
	selector: 'app-event-edit',
	templateUrl: './event-edit.component.html',
	styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {
	/**
	 * Constructor is required for every component
	 * and in case of the usage of a service below 
	 * declaration of a private instance of that 
	 * service is required
	 */
	constructor(
		private privateEventService: EventService,
		private route: ActivatedRoute,
    	private location: Location
	) { }

	/**
	 * [event Defining the type Event]
	 * @type {Event}
	 */
	//eventEditable: Event;
	@Input() eventEditable: Event;

	eventEditableId: number;

	/**
	 * [ngOnInit Function to run the moment page loads]
	 * Importing the Params which are retrieved iusing switchMap
	 * Calling the method in service where we find the specific event by its id
	 * 'Subscribing' the result to a property on this .ts file
	 */
	ngOnInit(): void {

	    let subscription = this.route.params.subscribe(params => {

	       let eventId = +params['id']; // (+) converts string 'id' to a number
	       let editableEvent: any = this.privateEventService.getEvent(eventId);
	       this.eventEditable = editableEvent;
	       this.eventEditableId = eventId;
	    });
	}

	/**
	 * [goBack Methos to navigate back to the page you came from]
	 * Using the location service imported above
	 */
	goBack(): void {
	    this.location.back();
	}

	saveEvent(): void {
		console.log(this.eventEditable);
		//add code which refers the service's method which saves the item to localStorage
		//this.privateEventService.getEvents().then(data => this.events = data);
	}

}
