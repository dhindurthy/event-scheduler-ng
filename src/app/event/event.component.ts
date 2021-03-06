import { Component, OnInit } from '@angular/core';
//import { Pipe, PipeTransform } from '@angular/core';
/**
 * Importing the class 'Event'
 */
import { Event } from '../event';

/**
 * Importing the service where later 
 * it is privatize the instance
 */
import { EventService } from '../event.service';

import { LocalizationService } from '../localization/localization.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  //providers: [EventService]//don't need this as per latest versions
})

export class EventComponent implements OnInit {

  	/**
	 * Constructor is required for every component
	 * and in case of the usage of a service, below 
	 * declaration of a private instance of that 
	 * service is required
	 */
	constructor(
		private privateEventService: EventService,
		private privateLocalizationService: LocalizationService
	) { 
		
	}

	/**
	 * [events This is the 'events' array of TYPE 'any']
	 * @type {any}
	 */
  	events : any;
  	cancelledEvents = [];

	/**
	 * [ngOnInit This is a lifecycle hook in angular 
	 * that is also required to be provided and in 
	 * this case we need to call getEvents() everytime 
	 * data changes so we have  it in there]
	 */
	ngOnInit() {

		this.getEvents('events');
	}

  	/**
  	 * [getEvents Method that retrieves the data of all 'Events' 
  	 * from the service is being called here. Note that 
  	 * there is method of same name in the service as well]
  	 */
	getEvents(key: string): void {

		let storedEvents: any;
		storedEvents = this.privateEventService.getEvents<string>(key);
		if(key==='events') {
			this.events = storedEvents;
		}
	}

	/**
	 * [deleteEvent Method that is run to delete 
	 * the event when desired]
	 * @param {Number} i [The parameter is the index 
	 * of the event the user hits to be deleted by which 
	 * the code knows what to delete]
	 */
	deleteEvent(i): void {
		this.privateEventService.deleteEvent(i);
		this.getEvents('events');
	}

	/**
	 * [onDropInActive This method gets fired once 
	 * the event is dropped in active area]
	 * @param {any} eventData [The event that has been dropped 
	 * in active area]
	 */
	onDropInActive(eventData: any) {
    	this.privateEventService.updateStatus(eventData, 'active');
  		this.getEvents('events');
	}

	/**
	 * [onDropInCancelled Method thats run once event is dropped in cancel box]
	 * @param {any} eventData [The event that has been dropped]
	 */
	onDropInCancelled(eventData: any) {
  		this.privateEventService.updateStatus(eventData, 'cancelled');
  		this.getEvents('events');
	}
}