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

  	events : any;

  	ngOnInit() {
		
	}

	model = new Event(null, '', '', '', '', '','');

  	submitted = false;

  	onSubmit() { 
  		this.submitted = true;
	    this.privateEventService.postEvent('events',this.model);
  	}
}
