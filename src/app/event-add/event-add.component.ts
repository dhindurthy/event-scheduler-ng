import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
	moduleId: module.id,
	selector: 'app-event-add',
	templateUrl: './event-add.component.html',
	styleUrls: ['./event-add.component.scss'],
	providers: [EventService]
})
export class EventAddComponent implements OnInit {

	constructor(
		private privateEventService: EventService
	) { }

  	events : Event[];

  	ngOnInit() {
		
	}

	model = new Event(null, '');

  	submitted = false;

  	onSubmit() { 
  		this.submitted = true; 
  		console.log(this.model);
  		//add code which refers the service's method which adds the item to localStorage
  	}

}
