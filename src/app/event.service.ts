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
  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTSDATA);
  }

}