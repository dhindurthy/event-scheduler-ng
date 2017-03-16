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

  /**
   * [getEvent Method that looks up all the events and 
   * return the event that uer wants to edit]
   * @param {number} id [Id of the event]
   */
  getEvent(id: number) {

    let existingEvents: any = this.getEvents<string>('events');
    let event: any = existingEvents.find(event => event.id === id);
    return event;
  }

  /**
   * [deleteEvent Method thats run everytime an event is deleted]
   * @param {number} index [Index of the event]
   */
  deleteEvent(index: number) {

    let existingEvents: any = this.getEvents<string>('events');
    existingEvents.splice(index,1);
    existingEvents = JSON.stringify(existingEvents);
    localStorage.setItem('events', existingEvents);
  }

  /**
   * [updateEvent Method that is run everytime an event is edited]
   * @param {number} index [Index of the event]
   * @param {any}    event [The event thats being updated]
   */
  updateEvent(index: number, event: any) {

    let existingEvents: any = this.getEvents<string>('events');
    existingEvents[index] = event;
    existingEvents = JSON.stringify(existingEvents);
    localStorage.setItem('events', existingEvents);
  }
  
  /**
   * [postEvent Method run everytime an event is added]
   * @param {string} key   ['events']
   * @param {any}    event [Event that is being added]
   */
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

  /**
   * [updateStatus Method that is run everytime an event 
   * is drag-dropped around from active to cancel and vice versa]
   * @param {any}    eventData [Event that has been moved 
   * and should get its status changed]
   * @param {string} status    [Active or Cancelled]
   */
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