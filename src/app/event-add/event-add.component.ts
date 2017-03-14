import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

import { Location }           from '@angular/common';

@Component({
	moduleId: module.id,
	selector: 'app-event-add',
	templateUrl: './event-add.component.html',
	styleUrls: ['./event-add.component.scss'],
	//providers: [EventService]//don't need this as per latest versions
})
export class EventAddComponent implements OnInit {

	constructor(
		private privateEventService: EventService,
		private location: Location
	) { }

  	events : any;

  	ngOnInit() {
		
	}

	model = new Event(null, '', '', '', '', '', '', '');

  	submitted = false;

  	formSaved = false;

  	onSubmit() { 
  		this.submitted = true;
  		this.model.status = 'active';
  		this.model.id = Math.round(Math.random()*10000);
	    this.privateEventService.postEvent('events',this.model);
	    this.formSaved = true;
  	}

  	goBack(): void {

	    this.location.back();
	}
}
