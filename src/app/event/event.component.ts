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

  //constructor() { }
  constructor(private privateEventService: EventService) { }

  ngOnInit() {
  	this.getEvents();
  }

  events : Event[]; //the 'Event[]' means its an array of type 'Event'

  getEvents(): void {
    this.privateEventService.getEvents().then(data => this.events = data);
  }

}