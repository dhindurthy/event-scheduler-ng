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
    let value: any = localStorage.getItem(key);
    
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
  

  postEvents(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
}