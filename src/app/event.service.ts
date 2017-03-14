import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTSDATA } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  /**
   * [getEvents Method that retrieves
   * the data from the mocks and provides 
   * it to the instance of this service's method]
   * @return {Promise<Event[]>} [Returns the data which 
   * is the array of events in this case]
   */
  getEvents<T>(key: string): T {

    let value: any;
    value = localStorage.getItem(key);
    if (value && value != "undefined" && value != "null") {

      return <T>JSON.parse(value);
    }
    return null;
  }

  getEvent(id: number) {

    let existingEvents: any = this.getEvents<string>('events');
    let event: any = existingEvents.find(event => event.id === id);
    return event;
  }

  deleteEvent(index: number) {

    let existingEvents: any = this.getEvents<string>('events');
    existingEvents.splice(index,1);
    existingEvents = JSON.stringify(existingEvents);
    localStorage.setItem('events', existingEvents);
  }

  updateEvent(index: number, event: any) {

    let existingEvents: any = this.getEvents<string>('events');
    existingEvents[index] = event;
    existingEvents = JSON.stringify(existingEvents);
    localStorage.setItem('events', existingEvents);
  }
  
  postEvent(key: string, event: any) {
    let existingEvents: any = this.getEvents<string>(key);
    let storedEvents: any = [];
    if(existingEvents){
      storedEvents = existingEvents;
    }
    if (event) {
      storedEvents.push(event);
      storedEvents = JSON.stringify(storedEvents);
      localStorage.setItem(key, storedEvents);
    }
  }

  updateStatus (eventData: any, status: string) {
    let movedEvent = eventData;
    let movedEventId = eventData.id;

    let allEvents: any = this.getEvents<string>('events');

    for (var i = 0; i < allEvents.length; i++) {
      if (allEvents[i].id === movedEventId) {
        allEvents[i].status = status;
      }
    }

    let updatedEvents = JSON.stringify(allEvents);
    localStorage.setItem('events', updatedEvents);
  }
}