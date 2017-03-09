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

	/**
	 * [ngOnInit This is a lifecycle hook in angular 
	 * that is also required to be provided and in 
	 * this case we need to call getEvents() everytime 
	 * data changes so we have  it in there]
	 */
	ngOnInit() {
		this.getEvents();
	}

	color = 'green';

  	/**
  	 * [getEvents Method that retrieves the data of all 'Events' 
  	 * from the service is being called here. Note that 
  	 * there is method of same name in the service as well]
  	 */
	getEvents(): void {

		let storedEvents: any = this.privateEventService.getEvents<string>('events');
		this.events = storedEvents;
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
		this.getEvents();
	}

	cancelledEvents = [];
	onDropInActive(eventData: any) {
	    console.log('dropped:', eventData);
	    let eventId = eventData.id;
	    for (var i = 0; i < this.cancelledEvents.length; i++) {
	    	if (this.cancelledEvents[i].id === eventId) {
				this.cancelledEvents.splice(i, 1);
			}
	    }
	    let cancelledEvents = (JSON.parse(JSON.stringify(this.cancelledEvents)));
		var movedEvent = eventData;

		/**
		 * This will make it happen in cache but not in localstorage
		 * So the post event should be done here
		 */
		this.events.push(movedEvent);
	}

	onDropInCancelled(eventData: any) {
	    console.log('dropped in cancelled:', eventData);
	    let eventId = eventData.id;
	    console.log(eventId);
	    //let events = 
	    for (var i = 0; i < this.events.length; i++) {
	    	if (this.events[i].id === eventId) {
				this.events.splice(i, 1);
			}
	    }
	    console.log(this.events);
	    let events = (JSON.parse(JSON.stringify(this.events)));
	    console.log(events);
		var movedEvent = eventData;
		movedEvent.id =  Math.round(Math.random()*10000);
		console.log(movedEvent);

		/**
		 * This will make it happen in cache but not in localstorage
		 * So the post event should be done here
		 */
		this.cancelledEvents.push(movedEvent);
	}
}