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
  getEventsyo(): Promise<Event[]> {
    return Promise.resolve(
      EVENTSDATA
    );
  }

  getEvent(id: number) {
    // return this.getEvents()
    //            .then(events => events.find(event => event.id === id));
    let existingEvents: any = this.getEvents<string>('events');
    console.log(existingEvents);
    let event: any = existingEvents.find(event => event.id === id);
    console.log(event);
    return event;
  }
  

  setEvents(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  getEvents<T>(key: string): T {
    let value: any = localStorage.getItem(key);
    
    if (value && value != "undefined" && value != "null") {
      console.log(JSON.parse(value));
      return <T>JSON.parse(value);
    }

    return null;
  }
}