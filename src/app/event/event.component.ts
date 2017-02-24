import { Component, OnInit } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  providers: [EventService]
})

export class EventComponent implements OnInit {

  	/**
	 * Constructor is required for every component
	 * and in case of the usage of a service below 
	 * declaration of a private instance of that 
	 * service is required
	 */
	constructor(
		private privateEventService: EventService
	) { 
		
	}

	/**
	 * [events This is the 'events' array of TYPE 'any']
	 * @type {any}
	 */
  	events : any;

	/**
	 * [ngOnInit This is a lifecycle hook in angular 
	 * that is also required to be provided and in 
	 * this case we need to call getEvents() everytime 
	 * data changes so we have  it in there]
	 */
	ngOnInit() {
		this.getEvents();
	}

  	/**
  	 * [getEvents Method that retrieves the data of all 'Events' 
  	 * from the service is being called here. Note that 
  	 * there is method of same name in the service as well]
  	 */
	getEvents(): void {
		let storedEvents: any = this.privateEventService.getEvents<string>('events');
		this.events = storedEvents;
	}
}