import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTSDATA } from './mock-events';

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Promise<Event[]> {
    return Promise.resolve(EVENTSDATA);
  }

}






// @Injectable()
// export class MyServ {
//   getHeroes(): Promise<Hero[]> {
//     return Promise.resolve(HEROESDATA);
//   }

//   // See the "Take it slow" appendix
//   getHeroesSlowly(): Promise<Hero[]> {
//     return new Promise(resolve => {
//       // Simulate server latency with 2 second delay
//       setTimeout(() => resolve(this.getHeroes()), 2000);
//     });
//   }
// }